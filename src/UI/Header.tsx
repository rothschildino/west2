import header from './header.module.css'
import "../App.css"

function Header() {
  return (
    <div className='container'>
         <div className={header.header}>
            <div className={header.logo}>
                <h1>West</h1>
                <p>запчастина</p>
            </div>
              
            <div className={header.search}>
                <input type="text" placeholder='Пошук товарів' />
            </div>
        </div>
    </div>
  )
}

export default Header