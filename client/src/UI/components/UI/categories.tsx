import Category from './category'
import design from './category.module.css'

const categories = () => {
  return (
    <div className='container'>
        <div className={design.categories}>
             <Category />
             <Category />
             <Category />
             <Category />
             <Category />
             <Category />
             <Category />
             <Category />
             <Category />
        </div>
    </div>
  )
}

export default categories