import { useQuery } from "@tanstack/react-query"
import { fectTendenciayc } from "../services/tendenciasYC_services"


export const usetendenciaycolecciones = () => {
    const { data, isLoading, error } = useQuery ({
            queryKey: ['tendenciaycolecciones'],
            queryFn: ({ signal }) => fectTendenciayc(signal)
    })

    return{
        tendenciasycolecciones: Array.isArray(data) ? data: [],
        cargando: isLoading,
        error: error ? error.message : null,
        tieneDatos: Array.isArray(data) && data.length > 0
    }
}