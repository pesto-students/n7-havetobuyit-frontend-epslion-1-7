import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ProductListView } from '../components/product/ProductListView'
import { DefaultProductsLimit, SERVER_URL } from '../config/constants'
import styles from '../styles/Home.module.css'

interface HomepageProps {
  products: any[];
}

const Home: NextPage<HomepageProps> = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HaveToBuyIT!</title>
        <meta name="description" content="Have to buy it" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-12'>
        <div className='col-end-4 col-span-4'>Categories</div>
        <div className='col-start-4 col-end-9 col-span-4'><ProductListView products={props.products} /></div>
        <div className='col-start-9 col-end-13 col-span-4'>Footer</div>
      </div>
    </div>
  )
}

export default Home
export async function getStaticProps () {
  const currentPage = 0;
  const productsResponse = await fetch(
    SERVER_URL.concat(
      `product/${currentPage}/${DefaultProductsLimit}`
    )
  );
  const {data, links} = await productsResponse.json();
  return {
    props: {
      products: data,
      currentPage,
      totalPages: links.totalPages,
    },
    revalidate: 1
  };
}