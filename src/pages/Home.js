import React from 'react'
import { Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import spotifyLogo from '../images/spotify.png'
// const {
//   REACT_APP_CLIENT_ID,
//   REACT_APP_AUTHORIZE_URL,
//   REACT_APP_REDIRECT_URL
// } = process.env

const Home = (props) => {

  var REACT_APP_CLIENT_ID='fe8ef5c68ca741bdb4f4371bf8b5759a'
  var REACT_APP_AUTHORIZE_URL='https://accounts.spotify.com/authorize'
  var REACT_APP_REDIRECT_URL='http://localhost:3000/redirect'

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  const { isValidSession, location } = props
  const { state } = location
  const sessionExpired = state && state.session_expired

  return (
    <div>
      {isValidSession() ? (
        <Redirect to='/dashboard' />
      ) : (
        <div className='login'>
          {sessionExpired && (
            <Alert variant='info'>Session expired. Please login again.</Alert>
          )}
          <img src={spotifyLogo} alt='spotify-logo' width='200' height='200'/>
          <div className='spotify-title'>
            <h2>Spotify</h2>
          </div>
          <button className='spotify-login-button' onClick={handleLogin}>
            LOGIN
          </button>
        </div>
      )}
    </div>
  )
}

export default connect()(Home)
