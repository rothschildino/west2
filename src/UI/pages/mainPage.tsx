
import Header from '../Header'
import Banner from '../components/Banner/Banner'
import Categories from '../components/UI/categories'
import Products from '../components/UI/products'
import Services from '../components/UI/services'
import './App.css'


const mainPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Categories />
      <Products />
    </>
  )
}

export default mainPage