import { useState, useEffect } from 'react'
import '@/styles/globals.css'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  const [appData, setAppData] = useState({
    loged: false,
    user: {}
  });

  useEffect(()=>{
    if (!appData.loged){
      let token = localStorage.getItem('token')
      let user = JSON.parse(localStorage.getItem('user'))
      if(token){
        setAppData({
          loged:true,
          user
        })
      }
    }
  },[])

  return(
    <>
      <Layout appData={appData} setAppData={setAppData}>
        <Component {...pageProps} appData={appData} setAppData={setAppData}/>
      </Layout>
    </>
  )
}
