import React from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import { ListOfImages } from '../components/listOfImages/ListOfImages'
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types'
import Filters from '../components/filters/Filters'
import { Loading } from '../components/loading/Loading'
import { setSectionAction,setSortAction, setWindowAction, setShowViralAction, getGallery } from '../redux/actions'

const Home = ({ gallery = [], loading, errorHome }) => {
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
          : errorHome ? <span data-testid="error-home">{errorHome}</span> : <ListOfImages images={gallery} />
        }
      </Container>
    </div>
  )
}

const checkAndRun = (value, callback) => {
  if (value !== undefined) {
    callback(value)
  }
}

Home.getInitialProps = async ({ reduxStore, query: { section, sort, window, showViral } }) => {
  checkAndRun(section, () => reduxStore.dispatch(setSectionAction(section)))
  checkAndRun(sort, () => reduxStore.dispatch(setSortAction(sort)))
  checkAndRun(window, () => reduxStore.dispatch(setWindowAction(window)))
  checkAndRun(showViral, () => reduxStore.dispatch(setShowViralAction(JSON.parse(showViral))))
  await reduxStore.dispatch(getGallery())
  return {}
}

const mapStateToProps = ({ gallery, loading, errorHome }) => ({
  gallery,
  loading,
  errorHome
})

Home.propTypes = {
  loading: PropTypes.bool,
  errorHome: PropTypes.string,
  gallery: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    src: PropTypes.string
  }))
}

export default connect(mapStateToProps)(Home)

export { Home };
