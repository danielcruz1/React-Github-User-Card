import React from 'react';
import axios from 'axios';
import UserData from './UserData';

class Followers extends React.Component {
    constructor() {
        super();
        this.state={
            followerdata: [],
            username: 'danielcruz1'
        }
    }

    componentDidMount() {
        axios
            .get(`https://api.github.com/users/${this.state.username}/followers`)
            .then(res => {
                this.setState({
                    followerdata: res.data  
                });
                console.log(res.data);
            })
            .catch(err => {
                console.log('NANI?!',err)
            });
    }

    render() {
        return (
            <div className='follower-container'>
               {this.state.followerdata.map (follower => (
                    <div className='cards' key={follower.id}>
                        <img src={follower.avatar_url} />
                        <h2>{follower.login}</h2>
                        <p>Github: <a href={follower.url}>{follower.html_url}</a></p>
                    </div>
               ))}
            </div>
        );
    }


}


export default Followers; 