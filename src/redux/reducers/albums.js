import * as type from '../actionTypes'

const albumsReducer = (state = {}, action) => {
  const { albums } = action
  switch (action.type) {
    case type.SET_ALBUMS:
      return albums;
    case type.ADD_ALBUMS:
      return {
        ...state,
        next: albums.next,
        items: [...state.items, ...albums.items]
      };
    default:
      return state
  }
}

export default albumsReducer