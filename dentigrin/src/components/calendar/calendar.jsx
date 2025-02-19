import { useState, useEffect } from 'react'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {INITIAL_EVENTS, createEventId } from '../../utils/event-utils'
import './styles.css'
import apiService from '../../services/apiService'
import { formattedDate, formattedTime } from '../../utils/formattedDateTime'

export default function Calendar(){
  const [weekendsVisible, setWeekendsVisible] = useState(true)
  const [currentEvents, setCurrentEvents] = useState([])

  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible)
  }

  async function searchDentist(value) {
    let dentistEspecialty;
    let service;
    const data1 = {
      especializacion: value
    }
    const data2 = {
      servicio: value
    }

    switch (true) {
      case value === 'PERIODONCIA' || value === 'PROSTODONCIA' ||
        value === 'ODONTOLOGIA ESTETICA' || value === 'ENDODONCIA':
        dentistEspecialty = await apiService.post('dentist-especialty', data1)
        if (!dentistEspecialty) {
          alert('No ahi odontologos disponibles para la especialidad seleccionada')
          break;
        } 
        console.log('si entro a la funcion de busqueda de odontologos')
        console.log(dentistEspecialty)
        return dentistEspecialty
      case value === 'CONSULTA' || value === 'HIGIENE ORAL' ||
        value === 'RESINAS' || value === 'ENDODONCIA' || value === 'EXTRACCIÓN':
        break;
      default:
        alert('Especialidad no valida')
    }
  }

  async function handleDateSelect(selectInfo) {
    let title = prompt('Por favor ingrese el motivo del evento')
    let calendarApi = selectInfo.view.calendar
    if(title){
      let especializacion = prompt('Por favor ingrese una de la siguientes especializaciones: PERIODONCIA, PROSTODONCIA, ODONTOLOGIA ESTETICA, ENDODONCIA');
      let servicio = prompt('Por favor ingrese una de los siguientes servicios: CONSULTA, HIGIENE ORAL, RESINAS, ENDODONCIA, EXTRACCIÓN;');  
  
      let id = createEventId();
  
      if (title) {
        calendarApi.addEvent({
          id: id,
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        })
      }

      //Aqui se hace la funcion encargada de verificar los datos de especializacion y servicio
      searchDentist(especializacion)
  
      const horaConcatenada = `${formattedTime(selectInfo.startStr)} - ${formattedTime(selectInfo.endStr)}`
  
      const data = {
        fechaConsulta: formattedDate(selectInfo.startStr),
        horaConsulta: horaConcatenada,
        motivo: title,
        servicio: servicio,
        especializacion: especializacion
      }

      const response = await apiService.post('registrar-cita-medica', data)
      if (response) {
        alert(' Cita registrada con exito en el cronograma.')
      }else{
        alert('Error al registrar la cita')
      }
    }
    calendarApi.unselect() // clear date selection
  }

  function handleEventClick(clickInfo) {
    if (confirm(`Estas seguro de querer borrar el evento '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
      console.log('Aqui se envia la peticion para eliminar eventos de la base de datos')
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
          editable={false}/*Aqui se pueden editar para arrastrar y soltar los eventos*/
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