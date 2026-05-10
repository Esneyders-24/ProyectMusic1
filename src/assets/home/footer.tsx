import logofooter from '../img/img1tv.png'


const Footer = () => {
        return (
        <footer className="bg-[#858B6F] text-white py-10 mt-20">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo */}
        <div>
          <h1 className="w-70 h-full">
            <img src={logofooter} alt="" />
          </h1>

          <p className="mt-4 text-gray-300">
            Descubre las mejores bicicletas para aventura,
            ciudad y montaña.
          </p>
        </div>

        {/* Enlaces */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Enlaces
          </h2>

          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white transition">
              Inicio
            </li>

            <li className="hover:text-white transition">
              Productos
            </li>

            <li className="hover:text-white transition">
              Nosotros
            </li>

            <li className="hover:text-white transition">
              Contacto
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Contacto
          </h2>

          <p className="text-gray-300">
            📍 Lima, Perú
          </p>

          <p className="text-gray-300 mt-2">
            📞 +51 999 999 999
          </p>

          <p className="text-gray-300 mt-2">
            ✉ contacto@velori.com
          </p>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-600 mt-10 pt-5 text-center text-gray-400">
        © 2026 Velori. Todos los derechos reservados.
      </div>

    </footer>
  )
}

    
export default Footer