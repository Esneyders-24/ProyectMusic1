interface headrespaginas {
        titulo: String;
        subtitulo: String;
        boton: String;
        img: string;    
        boton1: String;    
}

const Headres = ({titulo, subtitulo, boton, img, boton1 }: headrespaginas) => {
  return (
    <header className="h-screen bg-center w-auto bg-cover bg-no-repeat  " style={{backgroundImage: `url(${img})`}}>
          <div className="mx-auto px-40 py-40 ">
            <button className="w-42 h-15 bg-[#858B6F] rounded-3xl text-white font-serif hover:scale-109 transition-all duration-300">{boton}</button>
            <h1 className="text-white  text-7xl mt-10 font-bold hover:scale-109 transition-all duration-300">{titulo}</h1>
            <p className="mt-10 text-4xl text-white font-medium hover:scale-109 transition-all duration-300">{subtitulo}</p>
              <button className="w-40 h-14 bg-[#858B6F] rounded-3xl text-white font-serif hover:bg-gray-400 transition-all duration-300 mt-10">{boton1}</button>
        </div>
    </header>
  )
}

export default Headres