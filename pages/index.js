import React from 'react'
import Router from 'next/router'
import Head from 'next/head'

import Modal from '../js/components/modal'

export default class extends React.Component {
  static getInitialProps () {
    return {
      photos: new Array(15).fill(0).map((v, k) => k + 1)
    }
  }

  constructor (props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  componentDidMount () {
    document.addEventListener('keydown', this.onKeyDown)
    // this.regisServiceWorker()
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  regisServiceWorker () {
    if ('serviceWorker' in navigator) {
      console.log('register service worker')
      navigator.serviceWorker.register('/sw.js')
        .catch(err => console.error('Service worker registration failed', err))
    } else {
        console.log('Service worker not supported')
    }
  }

  onKeyDown (e) {
    if (!this.props.url.query.photoId) return
    if (e.keyCode === 27) {
      this.props.url.back()
    }
  }

  dismissModal () {
    Router.push('/')
  }

  showPhoto (e, id) {
    e.preventDefault()
    Router.push(`/?photoId=${id}`, `/photo?id=${id}`)
  }

  render () {
    const { url, photos } = this.props

    return (
      <div>
        <div className='list'>
          <div>
            Hello 9999
            <i className="fa fa-envelope-open" aria-hidden="true" />
          </div>
          <img src="/static/dora.png" />
          {
            url.query.photoId &&
              <Modal
                id={url.query.photoId}
                onDismiss={() => this.dismissModal()}
              />
          }
          {
            photos.map((id) => (
              <div key={id} className='photo'>
                <a
                  className='photoLink'
                  href={`/photo?id=${id}`}
                  onClick={(e) => this.showPhoto(e, id)}
                >
                  {id}
                </a>
              </div>
            ))
          }
          <style jsx>{`
            .list {
              padding: 50px;
              text-align: center;
            }

            .photo {
              display: inline-block;
            }

            .photoLink {
              color: #333;
              verticalAlign: middle;
              cursor: pointer;
              background: #eee;
              display: inline-block;
              width: 250px;
              height: 250px;
              line-height: 250px;
              margin: 10px;
              border: 2px solid transparent;
            }

            .photoLink:hover {
              borderColor: blue;
            }
          `}</style>
        </div>
      </div>
    )
  }
}
