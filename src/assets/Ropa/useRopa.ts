import { useQuery } from "@tanstack/react-query"
import { fectRopa } from "../services/Ropa_services"



export const useRopa = () => {
    const { data, isLoading, error } = useQuery ({
            queryKey: ['Ropas'],
            queryFn: ({ signal }) => fectRopa(signal)
    })

    return{
        Ropas: Array.isArray(data) ? data: [],
        cargando: isLoading,
        error: error ? error.message : null,
        tieneDatos1: Array.isArray(data) && data.length > 0
    }
}