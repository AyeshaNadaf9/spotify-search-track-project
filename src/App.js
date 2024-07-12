import React , { Component } from 'react'
import './App.css'
import Artist from './component/Artist'
import Search from'./component/Search'
import Track from './component/Track'

import auth from'./auth';
const url="	https://api.spotify.com";

const myHeaders = new Headers();
myHeaders.append("Authorization",`${auth.oAuthToken}`);


const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

class App extends Component{
  constructor (props){
    super(props);
    this.state={
      artist:false,
      albums:false
    }
  }

   componentDidMount(){
     this.searchHandler('Sonu nigam');
     
   }
   searchHandler=(artistName)=>{
     fetch(`${url}/v1/search?q=${artistName}&type=artist`,requestOptions)
   .then(res =>res.json())
   .then(data=>{
     console.log('data=',data);
     this.setState({
       artist:data.artists.items[0]
     });
     this.getTracks(data.artists.items[0].id)
   })
   .catch(err=>console.log(err.message));
  }
  getTracks = (id) =>{
    console.log('artist id',id);
    fetch(`${url}/v1/artists/${id}/top-tracks?market=IN`, requestOptions)
    .then(res => res.json())
    .then(data=>{
      console.log('tracks=',data.tracks);
      this.setState({
        albums:data.tracks
      })
    })
    .catch(err => console.log(err.message));
  }
  render() {
    return (
      <div>
          <Search search={this.searchHandler}/>
          <Artist artistData={this.state.artist}/>
          <Track trackInfo={this.state.albums}/>
      </div>
    )
  }
}
export default App;
