import React from "react";
import MusicPlayer from 'react-responsive-music-player'
import './Player.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.playlist)
        this.state = { link: '' }
    }
    componentDidMount() {
        fetch('http://mosaic.nativebyte.in/api/music/' + this.props.playlist + '/content/resolve', {
            method: 'get',
            headers: new Headers({
                'Authorization': localStorage.getItem('jwtToken'),
            })
        })
            .then(response => response.json())
            .then(resp => {
                this.setState({
                    link: resp['data']
                })
            })
    }
    render() {
        const playlist = [
            {
                url: this.state.link,
                cover: 'http://media.glamsham.com/download/poster/images/sanam-teri-kasam/02-sanam-teri-kasam.jpg',
                title: this.props.name,
                artist: [
                    'Arijit Singh'
                ]
            },
            {
                url: 'https://mosaic-nativebyte-in.s3.ap-south-1.amazonaws.com/music/Lukka%20Chuppi%20-%20Unplugged%20-%20Darshan%20Raval%20320Kbps.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIEJOLVITN7HILT5A%2F20180602%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20180602T175616Z&X-Amz-Expires=3600&X-Amz-Signature=ad860b16005cfdbab96ad3cced3221beced9bf4b6ffb60dfed94e3b8c98b8288&X-Amz-SignedHeaders=host',
                cover: 'data:image/jpeg;base64,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',
                title: 'Yeh jawani hain diwani',
                artist: [
                    'Arijit Singh'

                ]
            },
            {
                url: 'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
                cover: 'https://i.ytimg.com/vi/AQLEDD7jpGs/maxresdefault.jpg',
                title: 'TIger Zinda Hain',
                artist: [
                    'Shekhar'
                ]
            },
            {
                url: 'http://res.cloudinary.com/alick/video/upload/v1502444212/Actor_ud8ccw.mp3',
                cover: 'http://1.bp.blogspot.com/-cq8qXreG4BQ/VJXIJky2_BI/AAAAAAAAAXc/De3fpZWdBS0/s1600/20141219200820.jpg',
                title: 'Khamosian',
                artist: [
                    'Ishaan'
                ]
            }
            // {
            //     url: 'http://res.cloudinary.com/alick/video/upload/v1502444215/Bridge_of_Fate_aaksg1.mp3',
            //     cover: 'http://res.cloudinary.com/alick/image/upload/v1502444306/Bridge_of_Fate_o36rem.jpg',
            //     title: 'Bridge of Fate',
            //     artist: [
            //         '王力宏',
            //         '谭维维'
            //     ]
            // }
        ]
        return (
            <div>
                {console.log(playlist.url)}
                {playlist.url !== '' && <MusicPlayer playlist={playlist} playnext = {this.props.playnext} autoplay={true}/>}

            </div>
        )
    }
}

class Playlistname extends React.Component {
    render() {
        return (
            <div className="playlist" >
            <li>{this.props.name}</li>
            </div>
    )
    }
}



class Playlist extends React.Component {
    render() {
        return (
            <ul>
                {this.props.playlist.map((playlist, index) => {
                    return <Playlistname key={index} name={playlist.name} />
                })}
            </ul>
        )

    }
}




class PlayerPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            playlist: [],
            activeSong: {},
            player: null,
            currTime: "00:00",
            currSecs: 0,
            currDur: 0,
            playing: false,
            volume: true,
            showPlaylist: false
        };
        
    }

    componentDidMount() {
        fetch("http://mosaic.nativebyte.in/api/playlist/list?status=all", {
            method: 'get',
            headers: new Headers({
                'Authorization': localStorage.getItem('jwtToken'),
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData['data'])
                this.setState({
                    playlist: responseData['data']
                })


            });
    }
    hhggg(){
       console.log("end")
    }
    render() {
        return (
            <div>
        

                <h2>{'PlayList'}</h2>
                {
                    this.state.playlist.length > 0 &&
                    <App playlist={this.state.playlist[1]['songs'][2]} name={this.state.playlist[1].name} playnext = {this.hhggg.bind(this)} />

                }
                {
                    this.state.playlist.length > 0 && <Playlist playlist={this.state.playlist} />
                }
            </div>
        );
    }
} 
export default PlayerPage