import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { getImage } from '../../redux/actions/getImage/getImage'
import { connect } from 'react-redux'
import { Image as BootstrapImage, Container, Card } from 'react-bootstrap';
import './imageDetail.css';

const ImageDetail = ({ link, title, description, ups, downs, score }) => {
    return (
        <div>
            <Head>
                <title>Image</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <Card>

                    <Card.Body>
                        <div>  <BootstrapImage className="image-detail-img" src={link} />  </div>
                        <div>
                            Title: {title}
                            <br />
                            Description: {description}
                            <br />
                            Upvotes: {ups}
                            <br />
                            Downvotes: {downs}
                            <br />
                            Score: {score}
                        </div>
                    </Card.Body>
                </Card>
            </Container>

        </div>
    )
}

ImageDetail.getInitialProps = async ({ reduxStore, query: { id } }) => {
    await reduxStore.dispatch(getImage(id))
    return {}
}

const mapStateToProps = ({ image }) => ({
    ...image
})


ImageDetail.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    ups: PropTypes.number,
    downs: PropTypes.number,
    score: PropTypes.number
}

export default connect(mapStateToProps)(ImageDetail)

