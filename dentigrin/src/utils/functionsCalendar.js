import apiService from '../services/apiService'

// Funcion para buscar un dentista por especialidad o servicio
export async function searchDentist(value) {
    const service = ['CONSULTA', 'HIGIENE ORAL', 'RESINAS', 'ENDODONCIA', 'EXTRACCIÓN']
    const specialties = ['PERIODONCIA', 'PROSTODONCIA', 'ODONTOLOGIA ESTETICA', 'ENDODONCIA']
    let formattedString = value.toUpperCase()

    let dentistEspecialty;

    if (specialties.includes(formattedString)) {
        const data1 = {
            especializacion: formattedString
        }
        dentistEspecialty = await apiService.post('dentist-especialty', data1);
        if (!dentistEspecialty.success) {
            alert(dentistEspecialty.error);
            return dentistEspecialty;
        }
        return dentistEspecialty;
    } else if (service.includes(formattedString)) {
        // Aquí puedes agregar lógica adicional si es necesario      
        const data2 = {
            servicio: formattedString
        }
        return data2;

    } else {
        alert(`La especialización o servicio "${value}" no es válida`);
        return null;
    }
}

// funcion para registrar una cita medica
export async function scheduleAppointment (data, specialties, services){
    const response = await apiService.post('registrar-cita-medica', data)
    if (response.success) {
      alert(`La cita con el Id: ${response.data.id}\n y motivo: ${response.data.motivo}\n fue registrada con exito`)
    }else if(!specialties.success || !services){
      alert(`Error al registrar la cita \n No se puede agendar la cita. Por favor verifique los datos ingresados.`) 

    }
}

// Funcion para cargar los eventos del calendario
export async function loadEvents(){
    const result = await apiService.getEvents(`cronograma-citas`);
    if (result.success) {
        return result;
    } else {
        console.error('Error fetching events:', result.error);
        return { success: false, error: result.error };
    }
}