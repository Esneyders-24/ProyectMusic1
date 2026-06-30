
import { CONFIG } from "../../config"
import type { Empleado } from "../../types/Empleado"


const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.EMPLEADO}`;

export const fectEmpleado = async (signal? : AbortSignal): Promise<Empleado[]> =>{
    const response = await fetch(API_URL, {signal})
    if(!response.ok){
        throw new Error(`Error al obtener directores: ${response.status}${response.statusText}`)
    }
    return response.json()
}