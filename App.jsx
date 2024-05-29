import imgPelicula from './assets/img_pelicula.webp'
import './App.css'

function App() {
      const isColor = true
      const color = isColor ? "blue" : "black"
    
  return (
    
    
    <>
    <div className="container">
      <h1>
      imagen de pelicula infantil
      <img src={imgPelicula} alt="" />
        </h1>
        
    </div>
    </>
    
  )
}
export default App
