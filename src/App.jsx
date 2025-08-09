import NavRoutes from './routes/NavRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar/>
      <NavRoutes/>
      <Footer/>
    </div>
  )
}

export default App
