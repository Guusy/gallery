import React from 'react'
import Head from 'next/head'
import { connect } from 'react-redux'
import { getGallery } from '../redux/actions/getGallery/getGallery'
import { ListOfImages } from '../components/listOfImages/ListOfImages'
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types'
import Filters from '../components/filters/Filters'
import { Loading } from '../components/loading/Loading'
import { setSectionAction } from '../redux/actions/filters/setSection/setSectionAction'
import { setSortAction } from '../redux/actions/filters/setSort/setSortAction'
import { setWindowAction } from '../redux/actions/filters/setWindow/setWindowAction'
import { setShowViralAction } from '../redux/actions/filters/setShowViral/setShowViralAction'

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
