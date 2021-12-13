import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Main from './main'

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
