import * as type from '../actionTypes'

const playlistReducer = (state = {}, action) => {
  const { playlists } = action
  switch (action.type) {
    case type.SET_PLAYLIST:
      return playlists
    case type.ADD_PLAYLIST:
      return {
        ...state,
        next: playlists.next,
        items: [...state.items, ...playlists.items]
      };
    default:
      return state
  }
}

export default playlistReducer