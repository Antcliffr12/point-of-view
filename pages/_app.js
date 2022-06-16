import { ApolloProvider } from '@apollo/client';
import React, {  useEffect } from 'react'

import client from '../lib/apolloClient';
import '../styles/globals.css';
import '../styles/bootstrap.scss';
import 'animate.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/head.scss';
import '../styles/components.scss';
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   console.log(window)
  //   if(window.scroll.length == 0){
  //     alert('fasdf');
  //   }
  // }, [])
  return (
      <Layout>
       <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp
