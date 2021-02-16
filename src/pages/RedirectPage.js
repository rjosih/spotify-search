import React from 'react'
import _ from 'lodash'
import { getParamValues } from '../helpers/handleParamValues'

export default class RedirectPage extends React.Component {
  componentDidMount() {
    const { handleExpiryTime, history, location } = this.props
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/search')
      }

      const access_token = getParamValues(location.hash)
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000
      localStorage.setItem('params', JSON.stringify(access_token))
      localStorage.setItem('expiry_time', expiryTime)
      handleExpiryTime(expiryTime)
      history.push('/search')
    } catch (error) {
      history.push('/')
    }
  }

  render() {
    return null
  }
}
