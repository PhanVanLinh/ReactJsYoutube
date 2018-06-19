import React, { Component } from 'react';

const API = "AIzaSyDZ5_8d9ZA_Dw4gGyVgzpMlM4PddF4smso";
const channelId = "UC_x5XG1OV2P6uZZ5FSM9Ttw";
var finalURL = `https://www.googleapis.com/youtube/v3/playlists?key=${API}&channelId=${channelId}&part=snippet&maxResults=10`

class Youtube extends Component {

    constructor(props) {
        super(props);

        this.state = {
            result: []
        }
        this.clicked = this.clicked.bind(this);
    }

    clicked() {
        fetch(finalURL)
            .then((response) => response.json())
            .then((responseJson) => {
                const result = responseJson.items.map(obj => obj.id);
                this.setState({result : result});
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
        }

    render() {
        return (
            <div>
                <button onClick={this.clicked}> Get youtube videos </button>
                {
                    this.state.result.map((link, id) => {
                        console.log("link =" + link);
                        var frame = <iframe key={id} width="560"
                            height="315"
                            src={"https://www.youtube.com/embed/" + link}
                            frameBorder="0"
                            allow="autoplay; encrypted-media" allowFullScreen></iframe>  
                        return frame;
                    })
                }
                {this.frame}
            </div>
        );
    }
}

export default Youtube;