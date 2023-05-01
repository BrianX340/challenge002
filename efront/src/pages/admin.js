import React, {useState,useEffect} from 'react'
import LeftMenu from "@/components/admin/LeftMenu";
import ProductContainer from "@/components/products/ProductContainer";
import Product from "@/components/products/Product";
import { getProducts } from '@/services/ApiServices';

export default function Admin(props) {
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
      <section className="columns" style={{ height: '100%' }}>
        <div className="column is-2 ml-3" style={{ height: '100%' }}>
          <LeftMenu reload={loadProducts} />
        </div>

        <ProductContainer className="column is-10">
          {
            products?.length > 0
            ?
            products.map(product=>{
              return <Product reload={loadProducts} isAdmin={true} product={product}/>
            })
            :
            <>
              <span>Ups parece que no hay articulos...</span>
            </>
          }
        </ProductContainer>
      </section>
    </>
  )
}
