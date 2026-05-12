import img2 from '../img/Simbolito (1).png'
import img1 from '../img/img1tv.png'

const Nav_Items = [
    {
        id: "inversiones",
        etiqueta: "Inversiones",
        titulo: "Inviterta con nosotros"
    },

    {
        id: "Proveedores",
        etiqueta: "Proveedores",
        titulo: "Nuestros socios"
    },

    {
        id: "empleados",
        etiqueta: "Empleados",
        titulo: "Nuestros colaboradores"
    },

    {
        id: "Tienda",
        etiqueta: "Tienda",
        titulo: "Compre de todo"
    },
]


const MainNavbar = () => {
    return (

        <nav className="flex justify-between items-center px-10 py-4 bg-[#858B6F] ">
            <h1 className="text-xl font-bold text-gray-800">
                <img className="flex w-20 h-auto object-cover " src={img1} alt="" />
            </h1>
            <ul className="flex gap-20 text-white">
                    <li    className="group relative cursor-pointer  hover:text-yellow-500 transition ">
                    HOME
                </li>
             

                <li className="group relative cursor-pointer hover:text-yellow-500 transition">
                    PRODUCTOS <img  className="w-4 h-auto object-contain ml-auto translate-x-6 block -mt-4"  src={img2} alt="" />
                <ul className="hidden group-hover:block absolute bg-white text-black mt-2 rounded shadow p-2">
                    <li className="p-2 hover:bg-gray-100  text-center ">
                            TENDENCIAS Y COLECCIONES
                    </li>
                    <li className="p-2 hover:bg-gray-100 text-center">
                            ROPAS
                    </li>
                    <li className="p-2 hover:bg-gray-100 text-center">
                            ZAPATOS
                    </li>
                    <li className="p-2 hover:bg-gray-100 text-center">
                            ACCESORIOS
                    </li>    
                    </ul>
                </li>   
                 <li className="group relative cursor-pointer hover:text-yellow-500 transition">
                     DEPORTES Y AIRE LIBRE  <img  className="w-4 h-auto object-contain ml-auto translate-x-6 block -mt-4"  src={img2} alt="" />
                <ul className="hidden group-hover:block absolute bg-white text-black mt-2 rounded shadow p-9">
                    <li className="p-2 hover:bg-gray-100">
                            CAMISETAS
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                            ACCESOSRIOS DEPORTIVOS  
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                            FITNESS  
                    </li>
                    <li className="p-2 hover:bg-gray-100">
                            BICICLETAS 
                    </li>

                    </ul>
                </li>                  

                <li className="group relative cursor-pointer  hover:text-yellow-500 transition">
                     OFERTAS <img  className="w-4 h-auto object-contain ml-auto translate-x-6 block -mt-4"  src={img2} alt="" />
                <ul className="hidden group-hover:block absolute bg-white text-black mt-2 rounded shadow p-2">
                    <li className="p-2 hover:bg-gray-100">
                            PROMOCIONES
                    </li>
                       <li className="p-2 hover:bg-gray-100">
                            
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