import React from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import { getGallery } from '../redux/actions/getGallery/getGallery'
import { ListOfImages } from '../components/listOfImages/ListOfImages'
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types'

const Home = ({ gallery = [] }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <ListOfImages images={gallery} />
      </Container>
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

Home.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    src: PropTypes.string
  }))
}

export default connect(mapStateToProps)(Home)

export { Home };
