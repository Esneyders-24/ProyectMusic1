import { useQuery } from "@tanstack/react-query"
import {fectEmpleado} from "../../services/Empleadoservices"

export const useEmpleado = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['Empleado'],
        queryFn: ({ signal }) => fectEmpleado(signal)
    })
    
    return {
        Empleado: Array.isArray(data) ? data : [],
        cargando:isLoading,
        error: error ? error.message : null,
        hasEmpleado: Array.isArray(data) && data.length>0 
    }
}