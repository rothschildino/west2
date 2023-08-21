import design from './product.module.css'

const product = () => {
  return (
    <div className={design.productAll}>
      <div className={design.product}>

          <div className={design.photo}>
              <img src="https://www.hydrohouse.ua/wp-content/uploads/2022/05/adapter_bsp.png.webp" alt="" />
          </div>
        <div className={design.name}><p>Адаптер</p></div>
        <div className={design.price}><p>12000 грн</p></div>

      </div>

      <div className={design.hoverArea}>
        <button>Замовити</button>
      </div>

    </div>
       

  )
}

export default product