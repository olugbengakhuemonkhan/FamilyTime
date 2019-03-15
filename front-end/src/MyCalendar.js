import React, {Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';


const localizer = BigCalendar.momentLocalizer(moment)

class MyCalendar extends Component {
  constructor(){
    super();
    this.state = {
      tasks: []
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3001/getTasks`).then((resp)=>{
      console.log(resp.data)
        this.setState({
          tasks: resp.data
        })
    })
  }


  render(){
    const dummyEvents = [
      {
        id: 14,
        title: 'Ogo plays',
        start: new Date(new Date('March 14, 2019 03:30')),
        end: new Date(new Date('March 14, 2019 05:30')),
      },
{
  id: 14,
  title: 'Today',
  start: new Date(new Date().setHours(new Date().getHours() - 3)),
  end: new Date(new Date().setHours(new Date().getHours() + 3)),
},
]


  console.log(this.state.tasks)
  const familyEvents = this.state.tasks.map((task,i)=>{
    return(
      {
        id: i,
        title: task.name,
        start: new Date(task.date),
        end: new Date(task.enddate),
        allDay: false,

      }
    )
  })
  console.log(familyEvents)

    return (
      <div>
          <h1 className="App-title">Family Time Planner</h1>
        <div style={{height: 700}}>
          <BigCalendar
            localizer={localizer}
            events={familyEvents}
            step={30}
            defaultView='week'
            views={['month','week','day']}
            defaultDate={new Date()}
            title = "title"
          />
        </div>
      </div>
    );

}
}

export default MyCalendar;
