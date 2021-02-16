import axios from 'axios'
import * as type from '../actionTypes' 
  import { setAuthHeader } from '../../helpers/handleAuthHeader'
  
  const get = async (url, params) => {
    setAuthHeader()
    const result = await axios.get(url, params)
    return result.data
  }
  
  export const setAlbums = (albums) => ({
    type: type.SET_ALBUMS,
    albums
  })

  export const addAlbums = (albums) => ({
    type: type.ADD_ALBUMS,
    albums
  })

  export const setArtists = (artists) => ({
    type: type.SET_ARTISTS,
    artists
  })

  export const addArtists = (artists) => ({
    type: type.ADD_ARTISTS,
    artists
  })

  export const setPlayList = (playlists) => ({
    type: type.SET_PLAYLIST,
    playlists
  })

  export const addPlaylist = (playlists) => ({
    type: type.ADD_PLAYLIST,
    playlists
  })

  export const initiateGetResult = (searchTerm) => {
    return async (dispatch) => {
      try {
        const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
          searchTerm
        )}&type=album,playlist,artist`
        const result = await get(API_URL)
        console.log(result)
        const { albums, artists, playlists } = result
        dispatch(setAlbums(albums))
        dispatch(setArtists(artists))
        return dispatch(setPlayList(playlists))
      } catch (error) {
        console.log('error', error)
      }
    }
  }

  export const initiateLoadMoreAlbums = (url) => {
    return async (dispatch) => {
      try {
        console.log('url', url)
        const result = await get(url)
        console.log('categories', result)
        return dispatch(addAlbums(result.albums))
      } catch (error) {
        console.log('error', error)
      }
    };
  }
  
  export const initiateLoadMoreArtists = (url) => {
    return async (dispatch) => {
      try {
        console.log('url', url)
        const result = await get(url)
        console.log('categories', result)
        return dispatch(addArtists(result.artists))
      } catch (error) {
        console.log('error', error)
      }
    }
  }

  export const initiateLoadMorePlaylist = (url) => {
    return async (dispatch) => {
      try {
        console.log('url', url)
        const result = await get(url)
        console.log('categories', result)
        return dispatch(addPlaylist(result.playlists))
      } catch (error) {
        console.log('error', error)
      }
    }
  }