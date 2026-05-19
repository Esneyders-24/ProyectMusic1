import { CONFIG } from "../../config";
import type { tendencias_colecciones } from "../../types/TendenciaYC";
console.log(CONFIG.API_URL)
const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.TENDENCIASYCOLECCIONES}`

export const fectTendenciayc = async (signal?: AbortSignal): Promise<tendencias_colecciones[]> => {
    const response = await fetch(API_URL, {signal})
    if(!response.ok){
        throw new Error(`Error al obtener tendencias y colecciones: ${response.status} ${response.statusText}`);
    }
    return response.json()
}