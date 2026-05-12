import './App.css'
import MainNavbar from './assets/common/MainNavbar'
import Mainhero from './assets/common/Mainhero'
import Cuerpo from './assets/home/Cuerpo'
import Novedades from './assets/home/Novedades'
import Footer from './assets/home/footer'
import Ranking from './assets/home/ranking'

const App = () => {

  return (
    <>
      <MainNavbar/>
      <Mainhero/>
      <Cuerpo/>
      <Novedades/>
      <Ranking/>
      <Footer/>

    </>
  )
}

export default App
