import React from 'react'
import design from './category.module.css'

const category = () => {
  return (
    <div className={design.category}>
        <div className={design.photo}><img src="https://www.hydrohouse.ua/wp-content/uploads/2022/05/adapter_bsp.png.webp" alt="" /></div>
        <div className={design.name}>БОЛТ</div>
    </div>
  )
}

export default category