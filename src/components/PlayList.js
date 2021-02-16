import React from 'react'
import { Card } from 'react-bootstrap'
import _ from 'lodash'
import spotifyLogo from '../images/spotify.png'

const PlayList = ({ playlist }) => {
  return (
    <div>
      {Object.keys(playlist).length > 0 && (
        <div className='playlist'>
          {playlist.items.map((item, index) => {
            return (
              <div key={index}>
                <Card style={{ width: '18rem' }}>
                  <a
                    target='_blank'
                    href={item.external_urls.spotify}
                    rel='noopener noreferrer'
                    className='card-image-link'
                  >
                    {!_.isEmpty(item.images) ? (
                      <img
                      src={item.images[0].url} 
                      alt='cover'
                      className='img-cover' 
                      />
                    ) : (
                      <img src={spotifyLogo} alt='no-cover' />
                    )}
                  </a>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      <small>By {item.owner.display_name}</small>
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

export default PlayList
