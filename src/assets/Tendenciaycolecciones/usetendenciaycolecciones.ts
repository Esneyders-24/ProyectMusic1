import { useQuery } from "@tanstack/react-query"
import { fectTendenciayc } from "../services/tendenciasYC_services"


export const usetendenciaycolecciones = ( idcategoria?:number | string ) => {
    const { data, isLoading, error } = useQuery ({
            queryKey: ['tendenciaycolecciones', idcategoria],
            queryFn: ({ signal }) => fectTendenciayc(idcategoria, signal)
    })

    return{
        tendenciasycolecciones: Array.isArray(data) ? data: [],
        cargando: isLoading,
        error: error ? error.message : null,
        tieneDatos: Array.isArray(data) && data.length > 0
    }
}