import design from './product.module.css'

const product = () => {
  return (
    <div className={design.productAll} id={design.animation}>
      <a className={design.product} id={design.product}>

          <div className={design.photo}>
              <img src="https://www.hydrohouse.ua/wp-content/uploads/2022/05/adapter_bsp.png.webp" alt="" />
          </div>
        <div className={design.name}><p>Адаптер1222223333</p></div>
        <div className={design.price}><p>12000 грн</p></div>

      </a>

      <div className={design.hoverArea} id={design.hoverArea}>

        <button id={design.button} className={design.button}>Замовити</button>

      </div>

    </div>
       

  )
}

export default product