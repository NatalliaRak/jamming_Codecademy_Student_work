import React from "react";
import './Track.css';

class Track extends React.Component{

    constructor(props){
        super(props);

        this.addTrack = this.addTrack.bind(this)
        this.removeTrack = this.removeTrack.bind(this);
    }


 
    renderAction(){
        if (this.props.isRemoval){
            return <button className="Track-action" 
                           onClick={this.removeTrack}>-
                    </button>;
        } 
        else {
            return <button className="Track-action" 
                           onClick={this.addTrack}> +
                    </button>
        }
    }

    addTrack() {
        this.props.onAdd(this.props.track)
      }

    removeTrack() {
        this.props.onRemove(this.props.track)
    } 
 

    render(){
        return(
            <div className="Track">

                <img className="Cover" alt='The cover img' src={this.props.track.albumCover} /> 
                  <br/>
                <div className="Track-information">
                        <h3>{this.props.track.name}</h3> 
                        <p>{this.props.track.artist}</p>
                        <p>{this.props.track.album}</p>
                        {this.props.track.preview_url ? (
                        <audio controls muted>
                            <source src={this.props.track.preview_url} />
                        </audio>
                        ) : <p>No preview</p>}
                    <br/>
                   
                </div>
                {this.renderAction()}
            </div>
        )
    }
}


export default Track