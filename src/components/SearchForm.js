import React, { useState } from 'react'
import InputBase from '@material-ui/core/InputBase'
import { makeStyles } from '@material-ui/core/styles'

import spotifyLogo from '../images/spotify.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    display: 'flex'
  },
  inputRoot: {
    color: 'inherit',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 14,
    marginLeft: 20,
    height: 35
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}))

const SearchForm = (props) => {
  const classes = useStyles()
  const [searchWord, setSearchWord] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    props.handleSearch(e.target.value)
    setSearchWord(e.target.value)
  }

  return (
    <div>
      <form>
        <div className={classes.search}>
            {/* <div className={classes.searchIcon}>
              <SearchIcon />
            </div> */}
            <figure>
              <img src={spotifyLogo} alt={'spotify-logo'} width="60" height="60"/>
            </figure>
            <InputBase
              placeholder='Search…'
              onChange={handleSearch}
              value={searchWord}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
        </div>
      </form>
    </div>
  )
}

export default SearchForm
