
import './App.css'
import Navbar from './customer/Components/Navbar/Navbar'
import HomePage from './pages/HomePage/HomePage'
import Footer from './customer/Components/Footer/Footer'
import Product from './customer/Components/Product/Product'
import ProductDetails from './customer/Components/ProductDetails/ProductDetails'
import Cart from './customer/Components/Cart/Cart'
import Checkout from './customer/Components/Checkout/Checkout'


function App() {

  return (
    <div className=''>
      <div >
        <Navbar/>
      </div>
      <div>
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
          <Cart/>
          
      </div>
      <Footer/>
    </div>
  )
}

export default App
