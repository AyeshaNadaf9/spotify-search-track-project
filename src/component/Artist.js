import React,{Component} from 'react'
import './artist.css';

class Artist extends Component{
    constructor(props) {
        super(props);
    }

    render (){
        if(!this.props.artistData) return null;
        const {id, name, images, genres ,followers,popularity,type} =this.props.artistData;
        return (
            <div className="container">
                <h3 className="title">Artist Info</h3>
                <section className="artist">
                    <article className="artist-body">
                    <h3 className="artist-title" >{name}</h3>
                    <img src={images[1].url} alt={name}/>
                    <div className="artist-card">
                        <p>
                            <strong>Genres - </strong>
                            <span>{genres}</span>
                        </p>
                        <p>
                            <strong>Popularity- </strong>
                            <span>{popularity}</span>
                        </p>
                        <p>
                            <strong>Followers - </strong>
                            <span>{followers.total}</span>
                        </p>
                    </div>
                    </article>
                </section>
            </div>
        )
    }
}
export default Artist;