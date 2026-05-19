import { CONFIG } from "../../config";
import type { Ropa } from "../../types/Ropa";

const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.ROPA}`

export const fectRopa = async (signal?: AbortSignal): Promise<Ropa[]> => {
    const response = await fetch(API_URL, {signal})
    if(!response.ok){
        throw new Error(`Error al obtener tendencias y colecciones: ${response.status} ${response.statusText}`);
    }
    return response.json()
}