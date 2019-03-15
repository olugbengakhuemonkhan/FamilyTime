import React, { Component } from 'react';
import axios from 'axios';
import Edit from './Edit';
import PickyDateTime from 'react-picky-date-time';


class Event extends Component {
  constructor(){
    super();
    this.state = {
      taskList: [],
      name: "",
      task: "",
      date: "",
      showPickyDateTime: true,
      date: new Date().getDate(),
      month: new Date().getMonth()+1,
      year: new Date().getFullYear(),
      hour: '12',
      minute: '10',
      second: '40',
      meridiem: 'PM'
    }
    this.inputName = this.inputName.bind(this)

    this.inputTask = this.inputTask.bind(this)
    this.inputDate = this.inputDate.bind(this)

  }
  componentDidMount(){
    axios({
      method: 'GET',
      url: 'http://localhost:3001/getTasks',
    }).then((taskListFromBackEnd)=>{
      console.log(taskListFromBackEnd);
      this.setState({
        taskList: taskListFromBackEnd.data
      })
    })
  }

  inputName = (event)=>{
      console.log(event.target.value)
      this.setState({
          name: event.target.value
      })
  }
  inputTask = (event)=>{
      console.log(event.target.value)
      this.setState({
          task: event.target.value
      })
  }
  inputDate = (event)=>{
      this.setState({
          date: event.target.value
      })
  }



  addNewTask = (e)=>{
    e.preventDefault()
    const dateString = this.state.year + "-" + this.state.month + "-" + this.state.date;
    const timeString = this.state.hour + ':' + this.state.minute + " " + this.state.meridiem
    const endtimeString = (this.state.hour+1) + ':' + this.state.minute + " " + this.state.meridiem
    // console.log(this.state.name,this.state.task,this.state.date);
    console.log(dateString);
    console.log(timeString);
    const jsDate = new Date(dateString+" "+timeString);
    let endJsDate = jsDate.getTime()+(60*60*1000);
    endJsDate = new Date(endJsDate);
    console.log(jsDate)
    const mysqlDate = jsDate.getUTCFullYear() + '-' +
        ('00' + (jsDate.getUTCMonth()+1)).slice(-2) + '-' +
        ('00' + jsDate.getUTCDate()).slice(-2) + ' ' +
        ('00' + jsDate.getUTCHours()).slice(-2) + ':' +
        ('00' + jsDate.getUTCMinutes()).slice(-2) + ':' +
        ('00' + jsDate.getUTCSeconds()).slice(-2);

      const endMysqlDate = endJsDate.getUTCFullYear() + '-' +
          ('00' + (endJsDate.getUTCMonth()+1)).slice(-2) + '-' +
          ('00' + endJsDate.getUTCDate()).slice(-2) + ' ' +
          ('00' + endJsDate.getUTCHours()).slice(-2) + ':' +
          ('00' + endJsDate.getUTCMinutes()).slice(-2) + ':' +
          ('00' + endJsDate.getUTCSeconds()).slice(-2);

    // const startTime = new Date(dateString+" "+timeString)
    // console.log(startTime)
    axios({
      method: 'POST',
      url: 'http://localhost:3001/addTask',
      data: {
         task: this.state.task,
         date: mysqlDate,
         end: endMysqlDate,
         name: this.state.name,
      }
    }).then((backEndResponse)=>{
      console.log(backEndResponse)
      this.setState({
        taskList: backEndResponse.data
      })
    })
  }

  onYearPicked(res) {
    const { year } = res;
    this.setState({ year: year});
  }

  onMonthPicked(res) {
    const { month, year } = res;
    this.setState({ year: year, month: month});
  }

  onDatePicked(res) {
    const { date, month, year } = res;
    this.setState({ year: year, month: month, date: date });
  }

  onResetDate(res) {
    const { date, month, year } = res;
    this.setState({ year: year, month: month, date: date });
  }

  onResetDefaultDate(res) {
    const { date, month, year } = res;
    this.setState({ year: year, month: month, date: date });
  }

  onSecondChange(res) {
    this.setState({ second: res.value });
  }

  onMinuteChange(res) {
    this.setState({ minute: res.value });
  }

  onHourChange(res) {
    this.setState({ hour: res.value });
  }

  onMeridiemChange(res) {
    this.setState({ meridiem: res });
  }

  onResetTime(res) {
    this.setState({
      second: res.clockHandSecond.value,
      minute: res.clockHandMinute.value,
      hour: res.clockHandHour.value
    });
  }

  onResetDefaultTime(res) {
    this.setState({
      second: res.clockHandSecond.value,
      minute: res.clockHandMinute.value,
      hour: res.clockHandHour.value
    });
  }

  onClearTime(res) {
    this.setState({
      second: res.clockHandSecond.value,
      minute: res.clockHandMinute.value,
      hour: res.clockHandHour.value
    });
  }

  // just toggle your outter component state to true or false to show or hide <PickyDateTime/>
  openPickyDateTime() {
    this.setState({showPickyDateTime: true});
  }

  onClose() {
    this.setState({showPickyDateTime: false});
  }

  render() {
    const {
          showPickyDateTime,
          date,
          month,
          year,
          hour,
          minute,
          second,
          meridiem
        } = this.state;
    const tasks = this.state.taskList.map((task,i)=>{
      return <tr><td>{task.name}</td><td>{task.task}</td><td>{task.date}</td></tr>
    })
    return (
      <div>

        <div className="to-change">
          <form onSubmit={this.addNewTask} className="add-task">
            <input onChange={this.inputName} type="name" id="new-name" placeholder="Child Name"value={this.state.name} />
            <input onChange={this.inputTask} type="text" id="new-task" placeholder="New Task" value={this.state.task }/>
            <PickyDateTime
                    size="m"// 'xs', 's', 'm', 'l'
                    mode={1} //0: calendar only, 1: calendar and clock, 2: clock only; default is 0
                    locale={`en-us`}// 'en-us' or 'zh-cn'; default is en-us
                    show={showPickyDateTime} //default is false
                    onClose={() => this.setState({ showPickyDateTime: false })}
                    defaultTime={`${hour}:${minute}:${second} ${meridiem}`} // OPTIONAL. format: "HH:MM:SS AM"
                    defaultDate={`${month}/${date}/${year}`} // OPTIONAL. format: "MM/DD/YYYY"
                    onYearPicked={res => this.onYearPicked(res)}
                    onMonthPicked={res => this.onMonthPicked(res)}
                    onDatePicked={res => this.onDatePicked(res)}
                    onResetDate={res => this.onResetDate(res)}
                    onResetDefaultDate={res => this.onResetDefaultDate(res)}
                    onSecondChange={res => this.onSecondChange(res)}
                    onMinuteChange={res => this.onMinuteChange(res)}
                    onHourChange={res => this.onHourChange(res)}
                    onMeridiemChange={res => this.onMeridiemChange(res)}
                    onResetTime={res => this.onResetTime(res)}
                    onResetDefaultTime={res => this.onResetDefaultTime(res)}
                    onClearTime={res => this.onClearTime(res)}
                  />
                  <button type="submit" className="Button">Add Task</button>
          </form>
        </div>
        <table>
          {tasks}
        </table>
      </div>
    );
  }
}

export default Event;
