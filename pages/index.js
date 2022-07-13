import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../src/components/Header/Header.jsx'
import Separator from '../src/components/Separator/Separator.jsx'
import FeaturedCard from '../src/components/FeaturedCard/FeaturedCard'
import ProductListing from '../src/components/ProducListing/ProductListing'
import TitleProducts from '../src/components/TitleProducts/TitleProducts'
import {loadFeaturedProduct, loadProducts} from "../src/lib/ApiRequest.js"

export default function Home({ featuredProduct, productList }) {
  console.log(productList);
  return (
    <div className={styles.container}>
      <Header />
      <Separator />
      <FeaturedCard featuredProduct={featuredProduct} />
      <Separator />
      <TitleProducts />
      <ProductListing />
      </div>
  )
}

export async function getStaticProps() {
  const featuredProduct = await loadFeaturedProduct()

  return { 
      props: {
          featuredProduct,
      }
  }
}
