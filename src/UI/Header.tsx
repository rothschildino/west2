import header from './header.module.css'
import "./pages/App.css"

import Search from './components/UI/search';



import { BiSolidInfoSquare } from "react-icons/bi";

function Header() {
  return (
    <div className='container'>
        <div className={header.header}>

          <div className={header.logoInfo}>
            <div className={header.logo}>
              <h1>West</h1>
              <p>запчастина</p>
            </div>
            <BiSolidInfoSquare size='2em' color='grey' />
          </div>

          <Search />
                          
            
        </div>
    </div>
  )
}

export default Header