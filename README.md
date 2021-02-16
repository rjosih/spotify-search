### Spotify search

![PictureOfApplication](https://i.imgur.com/oHxDoo6.png)


This is a React app that uses Spotify's search API and lists a search result. 
As a logged in user to Spotify, I should be able to do a search and get back a list of results.

## Process
![Process](https://i.imgur.com/grvd0By.png)
* Log in to the application with your Spotify credentials. 
* A token sets in localstorage as verifier.
* You are redirected to /search 
* Search for a song, album, artist etc --> makes an api call with the verified token
* Response comes back and are being stored in the Redux store.
* Results from Redux sture are listed as albums as default. You can choose artists and lists as well and it'll show their results.

## Techniques
### Front-end 
* ReactJS
* React-bootstrap (CSS-framework)
* Material-UI
* Redux

## Choice of techniques
I choose ReactJS as a front-end framework because I know it, also that I know it's very popular these days and is one of the latest technologies in Javascript.
Since React and React-bootstrap works fine together and React-bootstrap says be one of the best CSS-framework.

## Get started
    * Open terminal (terminal 1) in chosen directory
    * "git clone https://github.com/rjosih/spotify-search.git"
    * "cd spotify-search"
    * "npm i"
    * "npm start"
The project should start at https://localhost/3000

## Test it directly
https://spotify-search-rjosih.herokuapp.com/

## Thoughts 
It's designed to match the current design of Spotify, to have a red thread through the API and Spotify's UI.

## Future work
Right now it's not perfect at all. Small design flaws. I have big plans and ideas for future work. 
Examples: 
* Play song in browser
* Display the user with an avatar, the name
* Possibility to log out


