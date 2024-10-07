import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Products from './components/Products'
import ProductList from './components/ProductList'
import ProductWrapper from './components/ProductWrapper'

const App = () => {
  return (
    <>
     
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<ProductWrapper/>}>
          <Route index  element={<Products/>}/>
          <Route path=':id' element={<ProductList/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
