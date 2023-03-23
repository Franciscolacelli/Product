import { useState,  useEffect } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import ProductsForm from './components/ProductsForm'
import axios from 'axios'
import Loader from './components/Loader'

function App() {

  const [ products, setProducts] = useState( [] )
  const [ productUpdate, setProductUpdate] = useState( null )
  const [ openForm, setOpenForm ] = useState( false )
  const [ isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    getData()
    },[])
  
  const getData = () => {

    setIsLoading(true)
    
    axios
    .get("https://products-crud.academlo.tech/products/")
    .then( resp => setProducts(resp.data))
    .catch( error => console.error(error))

    setTimeout(() =>{
      setIsLoading(false)
           }, 500)

    setOpenForm(false)
  }
  
  const addProduct = (productData) => {
    axios
          .post("https://products-crud.academlo.tech/products/", productData)
          .then( () => getData())
          .catch( error => console.error(error))
  
  }
  

  
  const deleteProduct = idProduct => {
    axios
          .delete(`https://products-crud.academlo.tech/products/${idProduct}/`)
          .then( () => getData())
          .catch( error => console.error(error))
  
  }
  

  
  
  const selectProduct = productData => {
      setProductUpdate(productData)
      setOpenForm(true)
  }
  
  const productActualicer = productData => {
    axios
        .put(`https://products-crud.academlo.tech/products/${productData.id}/`, productData)
        .then( () => {  getData()
                        setProductUpdate(null)})
        .catch( error => console.error(error))
  }


  return (
    <>
    { isLoading && <Loader/>}
     <ProductsForm createProduct={ data => addProduct(data)}
            selectedProduct = {productUpdate}
            updateProduct = { data => productActualicer(data)}
            open = {openForm}
            onClose={() => setOpenForm(false)}
     />
    <div className="App">
      <div className='header'>
      <h1>Productos!</h1>
      <button className='button-modal' onClick={() => setOpenForm(true)}>+ Nuevo Producto</button>
      </div>

 
     <ProductList productsData = {products}
                deleteProductAction= { id => deleteProduct(id)}
                selectProduct= { data => selectProduct(data) }
                open = {setOpenForm}
                />
      
    </div>
    </>
  )
}

export default App
