import design from './search.module.css'
import { BiSearch } from "react-icons/bi";

const search = () => {
  return (
    <div className={design.inputGroup}>
        <form method='get' action="">
            <input type="text" className={design.input} placeholder='Шукати...'/>
        </form>
        <div>
            <button type='submit' className={design.button}><BiSearch size='1.5em' color='white' /></button>
        </div>
    </div>
    
  )
}

export default search