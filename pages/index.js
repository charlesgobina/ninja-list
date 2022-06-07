import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Homepage</h1>
      <p>Hello, this is the homepage</p>
      <Footer/>
    </div>
  )
}
