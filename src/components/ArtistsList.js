import React from 'react'
import { Card } from 'react-bootstrap'
import _ from 'lodash'
import spotifyLogo from '../images/spotify.png'

const ArtistsList = ({ artists }) => {
  return (
    <div>
      {Object.keys(artists).length > 0 && (
        <div className='artists'>
          {artists.items.map((artist, index) => {
            return (
              <div key={index}>
                <Card style={{ width: '18rem' }}>
                  <a
                    target='_blank'
                    href={artist.external_urls.spotify}
                    rel='noopener noreferrer'
                    className='card-image-link'
                  >
                    {!_.isEmpty(artist.images) ? (
                      <img
                        src={artist.images[0].url}
                        alt=''
                        className='img-cover'
                      />
                    ) : (
                      <img src={spotifyLogo} alt='' />
                    )}
                  </a>
                  <Card.Body>
                    <Card.Title>{artist.name}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </div>
  )
}

export default ArtistsList
