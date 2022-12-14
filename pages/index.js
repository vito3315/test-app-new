import Head from 'next/head'

import { Header } from '../components/header.js';

import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header city={'samara'} cats={[]} city_list={[]} active_page={''} />


      <ul style={{ marginTop: 200 }}>
        
        <li>
          <Link href="#">IS HOME 11</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/togliatti/contacts">Контакты</Link>
        </li>
        <li>
          <Link href="/blog/hello-world">Blog Post</Link>
        </li>
      </ul>
    </div>
  )
}