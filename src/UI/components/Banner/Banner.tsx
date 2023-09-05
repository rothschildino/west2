import banner from './banner.module.css'
import { BiMap } from "react-icons/bi";


const Banner = () => {
  return (
    <div className='container'>
      <div className={banner.container}>
        <div className={banner.mainContainer}>
          <div className={banner.text}>

            <div>
              <h1>Графік роботи:</h1>
            </div>

            <div>
              <p>пн - пт: 9:30 - 17:00</p>
              <p>СБ: 9:30 - 14:00</p>
            </div>

            <div>
              <p>+380 67 947 38 12</p>
              <p>+380 97 990 81 29</p>
              <p>+380 352 22 38 38</p>
            </div>
            
            <div className={banner.mapText}>
              <BiMap /><p>вулиця Гріга, 1</p>
            </div>
          </div>
          <div className={banner.photo}>
            <img src="https://i.imgur.com/XC2ASyZ.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Banner