import React, { useState } from 'react'
import * as action from '../redux/actions/result'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import SearchResult from '../components/SearchResult'
import SearchForm from '../components/SearchForm'

const Dashboard = (props) => {
  const { isValidSession, history } = props
  const [loading, setLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('albums')

  const handleSearch = (searchTerm) => {
    if (isValidSession()) {
      setLoading(true)
      props.dispatch(action.initiateGetResult(searchTerm)).then(() => {
        setLoading(false)
        setSelectedCategory('albums')
      })
    } else {
      history.push({
        pathname: '/',
        state: {
          session_expired: true
        }
      })
    }
  }

  const loadMore = async (type) => {
    if (isValidSession()) {
      const { dispatch, albums, artists, playlist } = props;
      setLoading(true)
      switch (type) {
        case 'albums':
          await dispatch(action.initiateLoadMoreAlbums(albums.next))
          break
        case 'artists':
          await dispatch(action.initiateLoadMoreArtists(artists.next))
          break
        case 'playlist':
          await dispatch(action.initiateLoadMorePlaylist(playlist.next))
          break
        default:
      }
      setLoading(false)
    } else {
      history.push({
        pathname: '/',
        state: {
          session_expired: true
        }
      })
    }
  }

  const setCategory = (category) => {
    setSelectedCategory(category);
  }

  const { albums, artists, playlist } = props
  const result = { albums, artists, playlist }

  return (
    <div>
      {isValidSession() ? (
        <div>
          <SearchForm handleSearch={handleSearch} />
          {loading ? 
          <div className='loading-text'>
            <h2>Loading...</h2>
          </div>
          :
          <SearchResult
          result={result}
          loadMore={loadMore}
          setCategory={setCategory}
          selectedCategory={selectedCategory}
          isValidSession={isValidSession}
          />
        }
        </div>
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: {
              session_expired: true
            }
          }}
        />
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    artists: state.artists,
    playlist: state.playlist
  }
}

export default connect(mapStateToProps)(Dashboard)
