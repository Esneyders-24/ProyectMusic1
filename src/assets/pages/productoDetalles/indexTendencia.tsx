import { useParams } from "react-router-dom"
import {useTendenciaDetalle} from "./useTendeciaDetalle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import DOMPurify from 'dompurify'

const DetalleTendencia = () => {
    const { idtendenciayC } = useParams<{ idtendenciayC: string }>()
    const { tendencia, cargando, error, tieneDatos  } = useTendenciaDetalle(idtendenciayC)
    
    
    
    if (cargando) return (
        <div className="p-20 text-center space-y-4">
            <div className="inline-block w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />

            <p className="text-slate-500 font-mono text-sm tracking-widest uppercase"> Cargando tendencias...</p>
        </div>
    )

    if (error) return (
        <div className="p-20 text-center">
            <p className="text-red-500"> {error}  </p>
        </div>
    )
  return (
    <div className='max-w-7xl mx-auto px-3 py-10'>
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 px-3">
          <img src={`https://andersones78x0.alwaysdata.net/img/${tendencia.imagenGrande}`} alt="" className="w-full h-auto object-cover"/>
      
  </div>
  <div className="w-full md:w-1/2 px-3">
     <h2>{tendencia.nombre}</h2>
     <table>
      <tbody>
        <tr>
          <th>Precio</th>
          <td>{tendencia.precio}</td>
        </tr>
        <tr>
          <th>Tallas</th>
          <td>{tendencia.tallas}</td>
        </tr>
        <tr>
          <th>Vendidos</th>
          <td>{tendencia.vendidos}</td>
        </tr>
        <tr>
          <th>Atencion al cliente</th>
          <td></td>
        </tr>
        <tr>
          <th>Pais</th>
          <td>{tendencia.pais}</td>
        </tr>
        <tr>
          <th>Codigo Ropa</th>
          <td>{tendencia.codigo_ropa}</td>
        </tr>
        <tr>
          <th>Personas Viendo</th>
          <td>{tendencia.personas_viendo}</td>
        </tr>
        <tr>
          <th>Valoracion</th>
          <td>{Array.from({ length: 5 }).map((_, index) => {
            const promedio =  Math.floor(  tendencia?.valoracion ?? 0 )
            const estrellaLlena = index < promedio;
            return(
              <span key={index}>
                <FontAwesomeIcon icon={ estrellaLlena ?  fasStar : farStar} className="text-amber-400"/>
              </span>
            )
          })}
            
            {tendencia.valoracion}</td>
        </tr>
      </tbody>
     </table>
     <h3>Descripcion</h3>
     <div dangerouslySetInnerHTML={{
      __html: DOMPurify.sanitize(tendencia?.descripcion_Profunda || "")
     }}> 
     </div>
  </div>
</div>
</div>

    
  )
}

export default DetalleTendencia