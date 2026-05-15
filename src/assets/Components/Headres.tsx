interface headrespaginas {
        titulo: String;
        subtitulo: String;
        img: string;        
}

const Headres = ({titulo, subtitulo, img}: headrespaginas) => {
  return (
    <header className="h-screen bg-cover bg-center" style={{backgroundImage: `url(${img})`}}>
        <div className='max-w-7xl mx-auto px-3 py-6'>
            <h1>{titulo}</h1>
            <p>{subtitulo}</p>
        </div>
    </header>
  )
}

export default Headres