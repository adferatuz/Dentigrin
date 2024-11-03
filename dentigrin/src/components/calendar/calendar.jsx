import { useState, useEffect } from 'react'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {INITIAL_EVENTS, createEventId } from '../../utils/event-utils'
import './styles.css'

export default function Calendar(){
  const [weekendsVisible, setWeekendsVisible] = useState(true)
  const [currentEvents, setCurrentEvents] = useState([])

  useEffect(() => {},[])

  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible)
  }

  async function saveEventsToDataBase(events){

  } 

  function handleDateSelect(selectInfo) {
    let title = prompt('Por favor ingrese el motivo del evento')
    /* let fechaConsulta = prompt('Ingrese la fecha en el siguiente formato: DD-MM-YYYY')
    let horaConsulta = prompt('ingrese la hora')
    let odontologo = prompt('nombre del odontologo') */
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection
    let id = createEventId();

    if (title) {
      calendarApi.addEvent({
        id: id,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })

      console.log(`
        Este es el valor de id: ${id}, 
        Este es el valor de start: ${selectInfo.startStr},
        Este es el valor de title: ${title},
        Este es el valor de end: ${selectInfo.endStr},
        Este es el valor de allDay: ${selectInfo.allDay}`)
    }
  }

  function handleEventClick(clickInfo) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  function handleEvents(events) {
    setCurrentEvents(events)
  }

  return (
    <div className='demo-app'>
      <Sidebar
        weekendsVisible={weekendsVisible}
        handleWeekendsToggle={handleWeekendsToggle}
        currentEvents={currentEvents}
      />
      <div className='demo-app-main'>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        /* you can update a remote database when these fire:
        eventAdd={function(){}}
        eventChange={function(){}}
        eventRemove={function(){}}
        */
        />
      </div>
    </div>
  )
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function Sidebar({ weekendsVisible, handleWeekendsToggle, currentEvents }) {
  return (
    <div className='demo-app-sidebar'>
      <div className='demo-app-sidebar-section'>
        <h2>Instrucciones</h2>
        <ul>
          <li>Selecciona fechas y se te pedirá que crees un nuevo evento.</li>
          <li>Arrastra, suelta y cambia el tamaño de los eventos.</li>
          <li>Haz clic en un evento para eliminarlo.</li>
        </ul>
      </div>
      <div className='demo-app-sidebar-section'>
        <label>
          <input
            type='checkbox'
            checked={weekendsVisible}
            onChange={handleWeekendsToggle}
          ></input>
          toggle weekends
        </label>
      </div>
      <div className='demo-app-sidebar-section'>
        <h2>All Events ({currentEvents.length})</h2>
        <ul>
          {currentEvents.map((event) => (
            <SidebarEvent key={event.id} event={event} />
          ))}
        </ul>
      </div>
    </div>
  )
}

function SidebarEvent({ event }) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )
}