import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Profile extends React.Component {
    constructor() {
        super();
        this.state={
            mydata: {},
            username: 'danielcruz1'
        }
    }

    componentDidMount() {
        axios
            .get(`https://api.github.com/users/danielcruz1`)
            .then(res => {
                this.setState({
                    mydata: res.data,  
                });
                console.log(res.data);
            })
            .catch(err => {
                console.log('NANI?!',err)
            });
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            newUser: e.target.value
        });
    };

    handleNewUser = e => {
        e.preventDefault();
        axios
        .get(`https://api.github.com/users/${this.state.newUser}`)
        .then(res => {
            this.setState({
                mydata: res.data,  
            });
            console.log(res.data);
        })
        .catch(err => {
            console.log('NANI?!',err)
        });
    }


    render() {
        return (
            
            <div className='profile-container'>
                <input
                    className='search-bar'
                    type="text"
                    value={this.state.newUser}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleNewUser}>Find User!</button>

                <img src={this.state.mydata.avatar_url} alt={this.state.mydata.name} />
                <h2>{this.state.mydata.name}</h2>
                <h3>{this.state.mydata.login}</h3>
                <p>Github: <a href={this.state.mydata.url}>{this.state.mydata.html_url}</a></p>
                <p>Followers: {this.state.mydata.followers}</p>
            </div>
        );
    }


}


export default Profile; 