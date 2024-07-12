import React,{Component} from 'react'
import './track.css'

class Track extends Component{
   constructor(props){
       super(props);
       this.state={
           playing:false,
            playPreviewUrl:null,
            audio:null
       }
   }
//    play audio logic 
 playAudio=(url)=>{
     const audio =new Audio(url);
     if(!this.state.playing) {
         audio.play();
         this.setState({playing:true,audio,playPreviewUrl:url});
     } else {
         this.state.audio.pause();
         if(this.state.playPreviewUrl === url){
             this.setState({ playing:false});
         } else{
             audio.play();
             this.setState({audio,playPreviewUrl:url});
         }
     }
 }

        /*track Icons*/
   trackIcon= (url) =>{
                 if(!url) {
                   return <i className="fas fa-bell"></i>; /*if no url addresss present*/
                 }
                 if(this.state.playing && this.state.playPreviewUrl === url){
                     return <i className="fas fa-pause"></i>; /*if song is in play state*/
                 }
                 return <i className="fas fa-play"></i>/*initial icon*/
   }
    render (){
        if(!this.props.trackInfo) return null;
        return(
            <div className="track1">
                <h3 className="track2">Tracks</h3>
                <section className="tracks">
                    {
                        this.props.trackInfo.map((item,key)=>{
                            const{name,album,preview_url}=item;
                            return(
                                <div key={key}>
                                    <h4> {name} </h4>
                                    <img src ={album.images[1].url} alt={name}/>
                                    <button onClick={()=>this.playAudio(preview_url)}>{this.trackIcon(preview_url)}</button>
                                    </div>
                            )
                        })
                    }
                </section>
            </div>
        )
    }
}
export default Track;