import { ApolloProvider } from '@apollo/client';
import {  useEffect } from 'react'
import client from '../lib/apolloClient';
import AOS from "aos";

import '../styles/globals.css';
import '../styles/bootstrap.scss';
import 'animate.css';
import "aos/dist/aos.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/head.scss';
import '../styles/components.scss';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);
  return (
      <Layout>
       <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp
