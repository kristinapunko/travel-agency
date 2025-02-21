import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Slides from './Slides'
import Header from './Header'
import Filters from './Filters'
import ImageGrid from './ImageSlider'
import TourList from './TourCard'
import GridComponent from './AboutUs'
import Footer from './Footer'
import DestinationGrid from './PopularTours'
import Login from './Login'
import Register from './Register'
import { Route, Routes, Router } from 'react-router-dom'
import TourDescription from './TourDescription'
import TourL from './ThematicTours'
import AllTours from './AllTours'

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
      <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
      <Route path='/tour' element={<TourDescription/>}/>
      <Route path='alltours/tour' element={<TourDescription/>}/>
      <Route path='/alltours' element={<AllTours/>}/>
    </Routes>
        </>
    )
}

const Home = () => (
  <>

      <Slides className='-z-10'/>
      <Filters />
      <Name main="Знайди свою найкращу" other="країну" />
      <ImageGrid />
      <Name main="Усі тури" other=""/>
      <TourList />
      <Name main="Чому ми" other=""/>
      <GridComponent />
      <Name main="Найпопулярніші напрямки" other="турів"/>
      <DestinationGrid />
      <Name main="Тематичні" other="тури"/>
      <TourL/>

  </>
);
  
const Name = (props) =>(
  <div class="flex justify-center items-center">
    <h1 className='capitalize text-[#361d32] text-xl my-4 lg:my-10 lg:text-3xl'>
        <span className='font-semibold'>{props.main}</span> {props.other}
    </h1>
</div>
)

const AuthLayout = ({ children }) => (
  <div
    className="text-white h-[100vh] flex justify-center items-center bg-cover bg-center"
    style={{
      backgroundImage: 'linear-gradient(to top, rgba(54, 29, 50, 0.7), rgba(0, 0, 0, 0)), url("../src/assets/ken-cheung-KonWFWUaAuk-unsplash.jpg")',
    }}
  >
    {children}
  </div>
);



export default App
