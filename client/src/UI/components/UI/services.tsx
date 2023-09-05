import Service from './service'
import design from './service.module.css'

const services = () => {
  return (
    <div className='container'>
        <div className={design.services}>
            <Service />
            <Service />
            <Service />
        </div>
    </div>
  )
}

export default services