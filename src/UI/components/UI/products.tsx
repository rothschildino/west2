import Product from './product'
import design from './product.module.css'


const products = () => {
  return (
    <div className='container'>
      <div className={design.products}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default products