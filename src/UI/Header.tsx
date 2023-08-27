import header from './header.module.css'
import "../App.css"

import Search from './components/UI/search';

function Header() {
  return (
    <div className='container'>
         <div className={header.header}>
            <div className={header.logo}>
                <h1>West</h1>
                <p>запчастина</p>
            </div>
              
            <Search />
        </div>
    </div>
  )
}

export default Header