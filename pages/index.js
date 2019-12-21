import React from 'react'
import Head from 'next/head'
import { Image } from '../components/image/Image'
import { connect } from 'react-redux'
import { getGallery } from '../redux/actions/getGallery/getGallery'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image />
    </div>
  )
}

Home.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(getGallery())
  return {}
}

const mapStateToProps = ({ gallery }) => ({
  gallery
})

export default connect(mapStateToProps)(Home)

export {Home};
