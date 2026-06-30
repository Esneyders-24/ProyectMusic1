import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import  {useEmpleado} from "./useEmpleado"
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import type { Empleado } from "../../../types/Empleado";
import { useQueryClient } from "@tanstack/react-query";



const tableStyles = {
   wrapper: "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm mt-10",
   table : "min-w-full divide-y divide-slate-200",
   thead: "bg-slate-50",
   th: "px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",
   tbody:"divide-y divide-slate-200 bg-white",
   tr: "transition-colors hover:bg-slate-50",
   td: "px-6 py-4 text-sm text-slate-700 whitespace-nowrap"
}


const Empleadotabla = () => {
      
      const queryClient = useQueryClient();

    const [mostrarModal, setMostrarModal] = useState(false);
    const [empleadoEditado, setEmpleadoEditado] = useState<Empleado | null>(null);

    const guardarCambios = async () => {
        if (!empleadoEditado) return;

        await fetch(`/api/empleados/${empleadoEditado.idempleados}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(empleadoEditado),
        });

        queryClient.invalidateQueries({ queryKey: ['Empleado'] });

        setMostrarModal(false);
};
    const { Empleado, cargando, error, hasEmpleado } = useEmpleado()
    if (cargando) return (
        <div className="p-20 text-center space-y-4">
            <div className="inline-block w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />
            <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">Cargando directores...</p>
        </div>
    )
    if (error) return (
        <div className="p-20 text-center space-y-4">
            <div className="inline-block w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />
            <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">{error}</p>
        </div>
    )
    
    
    
    return (
            <>
            <div className={tableStyles.wrapper}>
            {!hasEmpleado ? (
                <div>No se encotraron datos de directores</div>
            ) : (
                <table className={tableStyles.table}>
                    <thead className={tableStyles.thead}>
                        <tr className={tableStyles.tr}>
                            <th className={tableStyles.th}>Código</th>
                            <th className={tableStyles.th}>NOMBRE</th>
                            <th className={tableStyles.th}>APELLIDOS</th>
                            <th className={tableStyles.th}>CORREO</th>
                            <th className={tableStyles.th}>TELEFONO</th>
                            <th className={tableStyles.th}>ROLES</th>
                            <th className={tableStyles.th}></th>
                        </tr>
                    </thead>
                    <tbody className={tableStyles.tbody}>
                        {Empleado.map(itemEmpleado => (
                            <tr key={itemEmpleado.idempleados} className={tableStyles.tr + "group"}>
                                <td className={tableStyles.td}>{itemEmpleado.idempleados}</td>
                                <td className={tableStyles.td}>{itemEmpleado.Nombres}</td>
                                <td className={tableStyles.td}>{itemEmpleado.Apellidos}</td>
                                <td className={tableStyles.td}>{itemEmpleado.Correo}</td>
                                <td className={tableStyles.td}>{itemEmpleado.Telefono}</td>
                                <td className={tableStyles.td}>{itemEmpleado.rol}</td>
                                <td className={tableStyles.td}><button  onClick={() => {setEmpleadoEditado(itemEmpleado); setMostrarModal(true);}} title="Editar"><FontAwesomeIcon  icon={faEdit} className=" group-hover:opacity-100  group-hover:visible hover:text-red-600 "/></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            </div>

            {mostrarModal && (

<div className="fixed inset-0 bg-black/50 flex justify-center items-center">

    <div className="bg-white p-6 rounded-xl w-20px">

        <h2 className="text-2xl font-bold mb-4">
            Editar Empleado
        </h2>

        <input
            className="border w-full p-2 mb-3"
            value={empleadoEditado?.Nombres || ""}
            onChange={(e) =>
            setEmpleadoEditado({
            ...empleadoEditado!,
            Nombres: e.target.value
        })
    }
        />

        <input
             className="border w-full p-2 mb-3"
            value={empleadoEditado?.Apellidos || ""}
            onChange={(e) =>
            setEmpleadoEditado({
            ...empleadoEditado!,
            Apellidos: e.target.value
        })
    }
        />

        <button
    onClick={guardarCambios}
    className="bg-green-500 text-white px-4 py-2 rounded mr-2"
>
    Guardar
</button>

<button
    onClick={() => setMostrarModal(false)}
    className="bg-red-500 text-white px-4 py-2 rounded"
>
    Cerrar
</button>

    </div>

</div>

)}
        </>
            
        )
}

export default Empleadotabla