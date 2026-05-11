import logofooter from '../img/img1tv.png'
import instagram from '../img/instagram.png'
import facebook from '../img/facebook.png'
import X from '../img/X.png'
import whtapp from '../img/Whtapp.png'

const Footer = () => {
  return (
    <footer className="bg-[#838B6F] text-white py-10 mt-10">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo */}
        <div>
          <h1 className="flex w-30 h-auto object-cover">
            <img src={logofooter} alt="" />
          </h1>

          <p className="mt-3 text-white-300">
            Encuentra el equilibrio perfecto entre sofisticación y adrenalina. Ropa de vestir, equipamiento deportivo y las mejores bicicletas en un solo lugar.
          </p>

          <div className="grid grid-cols-4 gap-4 -pt-8 w-fit  justify-items-center translate-5">
            <img className="flex- w-10 h-auto  object-cover -translate-x-5" src={instagram} alt="instagram" />
            <img className="flex w-10 h-auto  object-cover -translate-x-5 " src={facebook} alt="facebook" />
            <img className="flex w-10 h-auto  object-cover -translate-x-5 " src={X} alt="facebook" />
            <img className="flex w-10 h-auto  object-cover -translate-x-5 " src={whtapp} alt="facebook" />
          </div>
        </div>
        <div className="flex gap-20">
          <div className=" flex flex-col gap-4 ">
            <h2 className=" text-2xl font-semibold mb-4 ">
              Categorias
            </h2>

            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition whitespace-nowrap">
                Tendencias y colecciones
              </li>

              <li className="hover:text-white transition">
                Ropas
              </li>

              <li className="hover:text-white transition">
                Zapatos
              </li>

              <li className="hover:text-white transition">
                Accesorios
              </li>

            </ul>
          </div>

          <div className=" flex flex-col gap-4  ">
            <h2 className=" text-2xl font-semibold mb-4  whitespace-nowrap">
              Ayuda al Cliente
            </h2>

            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition">
                Preguntas Frecuentes
              </li>

              <li className="hover:text-white transition">
                Política de Envíos
              </li>

              <li className="hover:text-white transition">
                Devoluciones y Cambios
              </li>

              <li className="hover:text-white transition">
                Guía de Tallas
              </li>

              <li className="hover:text-white transition">
                Términos y Condiciones
              </li>

              <li className="hover:text-white transition">
                Política de Privacidad
              </li>

            </ul>
          </div>

          <div className=" flex flex-col gap-4 ml-13  ">
            <h2 className=" text-2xl font-semibold mb-4  ">
              Contacto
            </h2>

            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition whitespace-nowrap">
                ⚲ Av. Principal 123 Ciudad, País
              </li>

              <li className="hover:text-white transition">
                🕻 +1 234 567 8900
              </li>

              <li className="hover:text-white transition">
                ✉︎ ventas@lunora.com
              </li>

              <li className="hover:text-white transition whitespace-nowrap">
                Horario de Atención: <br />
                Lun - Vie: 9:00 AM - 8:00 PM <br />
                Sábados: 10:00 AM - 6:00 PM <br />
                Domingos: 11:00 AM - 5:00 PM 
              </li>

            </ul>
          </div>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="border-t border-white-600 mt-10 pt-5 text-center text-white-400">
        © 2026 Lunora. Todos los derechos reservados.
      </div>

    </footer>
  )
}


export default Footer