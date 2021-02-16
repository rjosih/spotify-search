import React from 'react'
import { Card } from 'react-bootstrap'
import _ from 'lodash'
import spotifyLogo from '../images/spotify.png'

const AlbumsList = ({ albums }) => {
  return (
    <div>
      {Object.keys(albums).length > 0 && (
        <div className='albums'>
          {albums.items.map((album, index) => {
            return (
              <div key={index}>
                <Card style={{ width: '18rem' }}>
                  <a
                    target='_blank'
                    href={album.external_urls.spotify}
                    rel='noopener noreferrer'
                    className='card-image-link'
                  >
                    {!_.isEmpty(album.images) ? (
                      <img
                        src={album.images[0].url}
                        alt='cover'
                        className='img-cover'
                      />
                    ) : (
                      <img src={spotifyLogo} alt='empty-cover' />
                    )}
                  </a>
                  <Card.Body>
                    <Card.Title>{album.name}</Card.Title>
                    <Card.Text>
                      <small>
                        {album.artists.map((artist) => artist.name).join(', ')}
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default AlbumsList