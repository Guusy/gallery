import React from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import { getGallery } from '../redux/actions/getGallery/getGallery'
import { ListOfImages } from '../components/listOfImages/ListOfImages'
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types'
import Filters from '../components/filters/Filters'
import { Loading } from '../components/loading/Loading'

const Home = ({ gallery = [], loading }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Filters />
        {loading ?
          <Loading />
          : <ListOfImages images={gallery} />
        }
      </Container>
    </div>
  )
}

Home.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(getGallery())
  return {}
}

const mapStateToProps = ({ gallery, loading }) => ({
  gallery,
  loading
})

Home.propTypes = {
  loading: PropTypes.bool,
  gallery: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    src: PropTypes.string
  }))
}

export default connect(mapStateToProps)(Home)

export { Home };
