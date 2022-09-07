# jamming_Codecademy_Student_work
My React Codecademy Student Work, 

# Jamming: the Spotify Track Searcher and Saver
25 August 2020
The deployed web app is on <http://enjoy_silence.surge.sh/>

## OBJECTIVE
The web-app Jamming searches the tracks on Spotify, adds the searched tracks to the Playlist and saves it on the Spotify user’s library.

## BACKGROUND
The Jamming search results provide the features of the each track on desktop screens:
- the track title,
- the artist name,
- the album title,
- the track preview,
- the album cover.

![enjoy_silence surge sh](https://user-images.githubusercontent.com/106593583/186688261-efd04da9-bf8d-4dcb-ba3f-45b6a6d2d5a4.png)


There is a possibility to save the searched tracks to the Playlist as to remove the added track from the Playlist. The user can give the personalized Playlist title.
On the mobile screens the image covers and the track previews are not available.
The Search button provides the Authorization of the user on Spotify, after the second click – the search of the tracks by the artist’s name, song title or any other key word on Spotify, If the user is already indicated on Spotify, the search starts after the second click.
The Save on Spotify button saves the created Playlist on the Spotify library.

## TECHNICAL DESIGN
The Jamming web application is created on React.js. It has six components:
- the App;
- the SearchBar,
- the SearchResults,
- the Track,
- the Tracklist
- the Playlist.

The SearchBar, the SearchResults, the Track, the Tracklist and the Playlist React Components contain the functional elements of the web-app and imported into the App React component. So the App React Component includes constructor and such methods as *.addTrack()*, *.removeTrack()*, *.savePlaylist()*, *.search()* and *.updatePlaylistName()* methods and the binding that methods provide the triggering of the other React Components and its elements. 
The Spotify.js (src/util/Spotify.js) is also imported to the App React Component. That file provides the authorization, the search and Playlist saving on Spotify. The js-file uses *.getAccessToken()*, *.search()* and *.savePlaylist()* methods.
The *.getAccessToken()* method gets a user’s access token for requesting to the Spotify API and authorization on Spotify and redirects the user to the web app page after.
The *.search()* method with the value term provides the search on Spotify: it uses the Spotify GET request and to the following Spotify endpoint.
The *.savePlaylist()* method accepts a playlist name and an array of track URIs. It requists the userId, the playlistId and new playlist’sId.
There is the custom information for the Spotify.js file: the Cliend Id and the Redirect URL. More information on Spotify Development - **[Spotify Applications Registration Flow](https://developer.spotify.com/dashboard/login)** and **[Spotify Authentication guide]<https://developer.spotify.com/documentation/general/guides/authorization/>**.

## CAVEATS
For using the full feature track information on the web application on mobile screens - the album cover and the track preview - there will be need proper work with *@media* in the Track.css. Also there will be the necessity to create the limitation of the {this.props.track.album} length.

![photo_2022-08-25_16-12-42](https://user-images.githubusercontent.com/106593583/186688949-09e4517b-0dbe-47c0-af86-1ba3b360e920.jpg)


If the user is already authorized on Spotify, there will be need to repeat the search information twice.

