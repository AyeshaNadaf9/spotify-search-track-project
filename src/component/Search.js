import React,{Component} from 'react'
import './search.css'

class Search extends Component{
    constructor(props){
        super(props);
        /*ref method to fetch the value from input*/
        this.artist=React.createRef();
        this.submitHandler=this.submitHandler.bind(this);
    }
    // submit handler
    submitHandler(event){
        event.preventDefault();/*avoid page refresh*/
        console.log('data=',this.artist.current.value);
        this.props.search(this.artist.current.value);
    }
    render (){
        return(
    
            <div className="content">
                <h3 className="title">Search an Artist</h3>
                <form onSubmit={this.submitHandler} className="search">
                    <div>
                        <input type="search" name="artist" id="artist" ref={this.artist} placeholder="Enter the artist name " required/>
                        
                        
                    </div>
                    <div>
                        <input type ="submit" value="search"/>
                    </div>
                </form>
            </div>
        )
    }
}
export default Search;