import Carrito from '../img/Carrito.png'
import Casita  from '../img/Casita.png'
import Escudo  from '../img/Escudo.png'
import reloj   from '../img/reloj.png'
import promocion1 from '../img/promocional1.png'

const Cuerpo = () => {
      return (
        <main className="h-screen bg-[#F9FAFB] text-[#858B6F] text-6xl text-center mt-20 font-semibold  ">
            <h1>Sobre LUNORA</h1>
            <p className="text-2xl mt-5">Somos una tienda de ropa comprometida con ofrecerte las últimas tendencias en  <br />moda. Desde 2020, hemos vestido a miles de clientes con estilo y calidad.</p>
            <div className="flex gap-1">
            <section className="w-72 bg-white rounded-xl shadow-lg p-6 mt-15 ml-18 hover:shadow-xl transition  ">
                    <img src={Casita} alt="Casita" />
                   <h3 className='text-2xl font-bold mb-4'>Calidad Premium</h3>
                    <p className="text-xl">Productos de alta calidad seleccionados cuidadosamente</p>                  
            </section>
            <section className="w-72 bg-white rounded-xl shadow-lg p-6 mt-15 ml-18 hover:shadow-xl transition  ">
                    <img src={Carrito} alt="Carrito" />
                   <h3 className='text-2xl font-bold mb-4'>Envío Gratis</h3>
                    <p className="text-xl">En compras mayores a $50</p>                  
            </section>
            <section className="w-72 bg-white rounded-xl shadow-lg p-6 mt-15 ml-18 hover:shadow-xl transition  ">
                    <img src={Escudo} alt="Escudo" />
                   <h3 className='text-2xl font-bold mb-4'>Compra Segura</h3>
                    <p className="text-xl">Protección en todas tus transacciones</p>                  
            </section>
            <section className="w-72 bg-white rounded-xl shadow-lg p-6 mt-15 ml-18 hover:shadow-xl transition  ">
                    <img src={reloj} alt="reloj" />
                   <h3 className='text-2xl font-bold mb-4'>Atención 24/7</h3>
                    <p className="text-xl">Siempre disponibles para ayudarte</p>                  
            </section>
             </div>
             <div className="flex gap-6">
             <section className="w-120 h-120 mt-15 ml-18">
                    <img src={promocion1} alt="" />
             </section>
             <section className="w-120 h-120 mt-15 ml-18 ">
                    <img src={promocion1} alt="" />
             </section>
             </div>
        </main>

      )
}

export default Cuerpo