import { NavLink } from 'react-router-dom'
import img2 from '../img/Simbolito (1).png'
import img1 from '../img/img1tv.png'

const Nav_inicio = [
    {
        nombre: "Tendencias y colecciones",
        ruta: "/Tendencias" 
    }, 
    {
        nombre: "Ropas",
        ruta: "/Ropas"
    },
    {
        nombre:"Zapatos",
        ruta: "/Zapatos"
    },
    {
        nombre: "Accesorios",
        ruta: "/Accesorios"
    }, 

    {
        nombre: "Camiseta",
        ruta: "/Camisetas"
    },

    {
        nombre: "Accesorio Deportivo",
        ruta:"/AccesorioDeportivo"
    },

    {
        nombre:"Fitness",
        ruta:"/Fitness"
    },

    {
        nombre:"Bicicletas",
        ruta:"Bicicletas"
    },
    {
        nombre: "Promociones",
        ruta:"Promciones"
    }
]



const MainNavbar = () => {

    return (
        <nav className="flex justify-between items-center px-10 py-4 bg-[#858B6F] ">
            <h1 className="text-xl font-bold text-gray-800">
                <img className="flex w-20 h-auto object-cover " src={img1} alt="" />
            </h1>
            <ul className="flex gap-20 text-white"> 
                    <li className="group relative cursor-pointer  hover:text-yellow-500 transition ">
                        HOME 
                </li>
             

                <li className="group relative cursor-pointer hover:text-yellow-500 transition">
                    PRODUCTOS <img  className="w-4 h-auto object-contain ml-auto translate-x-6 block -mt-4"  src={img2} alt="" />
                <ul className="hidden group-hover:block absolute bg-white text-black  top-full rounded-xl">
                    
                    <li  className="p-2  hover:bg-yellow-400 text-center rounded-xl"> 
                            <NavLink to={Nav_inicio[0].ruta}>TENDENCIAS Y COLECCIONES </NavLink>
                    </li>
                    
                    <li className="p-2 hover:bg-yellow-400 text-center rounded-xl">
                            <NavLink to={Nav_inicio[1].ruta}> ROPAS </NavLink>
                    </li>
                    <li className="p-2 hover:bg-yellow-400 text-center rounded-xl">
                            <NavLink to={Nav_inicio[2].ruta}>ZAPATOS </NavLink>
                    </li>
                    <li className="p-2 hover:bg-yellow-400 text-center rounded-xl">
                            <NavLink to={Nav_inicio[3].ruta}>ACCESORIOS </NavLink>
                    </li>    
                    </ul>


                </li>   
                 <li className="group relative cursor-pointer hover:text-yellow-500 transition">
                     DEPORTES Y AIRE LIBRE  <img  className="w-4 h-auto object-contain ml-auto translate-x-6 block -mt-4"  src={img2} alt="" />
                <ul className="hidden group-hover:block absolute bg-white text-black top-full rounded-xl ">
                    <li className="p-2 hover:bg-yellow-400 text-center rounded-xl">
                            <NavLink to={Nav_inicio[4].ruta}>CAMISETAS</NavLink>
                    </li>
                    <li className="p-2 hover:bg-yellow-400 text-center rounded-xl ">
                            <NavLink to={Nav_inicio[5].ruta}>ACCESOSRIOS DEPORTIVOS</NavLink>  
                    </li>
                    <li className="p-2 hover:bg-yellow-400 text-center rounded-xl ">
                            <NavLink to={Nav_inicio[6].ruta}>FITNESS</NavLink>  
                    </li>
                    <li className="p-2 hover:bg-yellow-400 text-center  rounded-xl ">
                            <NavLink to={Nav_inicio[7].ruta}>BICICLETAS</NavLink> 
                    </li>

                    </ul>
                </li>                  

                <li className="group relative cursor-pointer  hover:text-yellow-500 transition">
                     OFERTAS <img  className="w-4 h-auto object-contain ml-auto translate-x-6 block -mt-4"  src={img2} alt="" />
                <ul className="hidden group-hover:block absolute bg-white text-black top-full rounded-xl ">
                    <li className="p-2 hover:bg-yellow-400 rounded-xl">
                            <NavLink to={Nav_inicio[8].ruta}>PROMOCIONES</NavLink>
                    </li>
                    </ul>
                </li> 

            </ul>
            <button className="bg-[#84AF05] text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition">
                Iniciar Sesion
            </button>


        </nav>



    )

}

export default MainNavbar