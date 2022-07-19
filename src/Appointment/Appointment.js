    import React, { useState } from 'react'
import AppointmentHeader from './AppointmentHeader/AppointmentHeader'
import AvailableAppointments from './AvailableAppointments/AvailableAppointments'
    
    function Appointment() {
        const [date, setDate] = React.useState(new Date());
      return (
        <div>
            <AppointmentHeader date={date} setDate={setDate}/>
            <AvailableAppointments date={date} />
        </div>
      )
    }
    
    export default Appointment