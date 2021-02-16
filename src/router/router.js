import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import RedirectPage from '../pages/RedirectPage'
import Dashboard from '../pages/Search'
import NotFoundPage from '../components/NotFoundPage'

const Router = () => {
  const [expiryTimeLeft, setExpiryTimeLeft] = useState(0)

  useEffect(() => {
    var expiryTime = 0
    try {
      expiryTime = JSON.parse(localStorage.getItem('expiry_time'))
    } catch (error) {
      console.log('Error', error)
      expiryTime = 0
    }
    setExpiryTimeLeft(expiryTime)
  }, [expiryTimeLeft])

  const handleExpiryTime = (expiryTime) => {
    setExpiryTimeLeft(expiryTime)
  }

  const isValidSession = () => {
    const currentTime = new Date().getTime()
    return currentTime < expiryTimeLeft
  }

    return (
      <BrowserRouter>
        <div className='main'>
          <Switch>
            <Route
              path='/'
              exact={true}
              render={(props) => (
                <Home isValidSession={isValidSession} {...props} />
              )}
            />
            <Route
              path='/redirect'
              render={(props) => (
                <RedirectPage
                  isValidSession={isValidSession}
                  handleExpiryTime={handleExpiryTime}
                  {...props}
                />
              )}
            />
            <Route
              path='/search'
              render={(props) => (
                <Dashboard isValidSession={isValidSession} {...props} />
              )}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
}

export default Router