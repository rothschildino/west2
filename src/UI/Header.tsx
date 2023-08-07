import header from './header.module.css'
import "../App.css"

function Header() {
  return (
    <div className='container'>
         <div className={header.header}>
            <div className={header.logo}>
                <img src="https://s3.eu-central-1.amazonaws.com/listmusor/production/185169/logo/big/5cc162ba3847d.png" alt="" />
            </div>

            <div className='search'>
                <input type="text" />
            </div>
        </div>
    </div>
  )
}

export default Header