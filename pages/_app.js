import App from 'next/app'
import React from 'react'
import withReduxStore from '../redux/withReduxStore'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <style global jsx>{`
          body {
            padding-top: 2em;
          }
        `}</style>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)