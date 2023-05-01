import React, {useState,useEffect} from 'react'
import ProductContainer from "@/components/products/ProductContainer";
import Product from "@/components/products/Product";
import { getProducts } from '@/services/ApiServices';

export default function Home() {
  const [sessionReady, setSessionReady] = useState(false)
  const [products, setProducts] = useState([])

  const loadProducts = async () => {
    let productsQuery = await getProducts()
    setSessionReady(true)
    return setProducts(productsQuery.products)
  }
  
  useEffect(()=>{
    if (!sessionReady){
      loadProducts()
    }
  },[])

  return (
    <>
      <main>
        <ProductContainer className="column is-10">
          {
            products?.length > 0
              ?
              products.map(product => {
                return <Product product={product} />
              })
              :
              <>
                <span>Ups parece que no hay articulos...</span>
              </>
          }
        </ProductContainer>
      </main>
    </>
  )
}
