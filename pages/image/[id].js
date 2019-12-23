import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { getImage } from '../../redux/actions'
import { connect } from 'react-redux'
import { Image as BootstrapImage, Container, Card } from 'react-bootstrap';
import './imageDetail.css';

const ImageDetail = ({ id, link, title, description, ups, downs, score, errorImageDetail }) => {
    return (
        <div>
            <Head>
                <title>Image {id}</title>
            </Head>
            <Container>
                <Card>
                    <Card.Header>
                        Image {id}
                    </Card.Header>
                    <Card.Body>
                        {errorImageDetail ? errorImageDetail :
                            <>
                                <div>  <BootstrapImage className="image-detail-img" src={link} data-testid="image-detail-img" />  </div>
                                <div>
                                    Title:  <span data-testid="image-detail-title">{title}</span>
                                    <br />
                                    Description: <span data-testid="image-detail-description">{description}</span>
                                    <br />
                                    Upvotes: <span data-testid="image-detail-ups">{ups}</span>
                                    <br />
                                    Downvotes: <span data-testid="image-detail-downs">{downs}</span>
                                    <br />
                                    Score: <span data-testid="image-detail-score">{score}</span>
                                </div>
                            </>}

                    </Card.Body>
                </Card>
            </Container>

        </div>
    )
}

ImageDetail.getInitialProps = async ({ reduxStore, query: { id } }) => {
    await reduxStore.dispatch(getImage(id))
    return { id }
}

const mapStateToProps = ({ image, errorImageDetail }) => ({
    ...image,
    errorImageDetail
})


ImageDetail.propTypes = {
    link: PropTypes.string,
    errorImageDetail: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    ups: PropTypes.number,
    id: PropTypes.number,
    downs: PropTypes.number,
    score: PropTypes.number
}

export default connect(mapStateToProps)(ImageDetail)

