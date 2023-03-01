import React,{ useState, useEffect } from 'react';
import Router from 'next/router';

//Component Imports
import Layout from '../components/shared/Layout'; 
import Loader from '../components/shared/Loader'; 

//Styles Imports
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  const [loading, setLoading] = useState(false); //conditional state to for loading(true/false)

  useEffect(() => {
    //using useEffect to check when router changed the route and set loading to true or false.
    //using settimeout to extend the delay of loading to properly load the page if connection is slow.
    Router.events.on("routeChangeStart", () => { setLoading(true) });
    Router.events.on("routeChangeComplete", () => { setLoading(false)});  
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return( 
    <> 
      <Layout>
          { loading && <Loader/> }
          { !loading &&  <Component {...pageProps} /> }
      </Layout> 
   </>
  )
}

export default MyApp