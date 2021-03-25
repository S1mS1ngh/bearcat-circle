import React from 'react';
import '../../../css/home/home.forum.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ForumCard from "./forum.card";

export default class HomeForum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    // componentDidMount() {
    //     fetch('SampleForum.json')
    //         .then((res) => res.json())
    //         .then(result => {
    //             this.setState({
    //                 isLoaded: true,
    //                 items: result
    //             });
    //             console.log(result)
    //         });
    // }

    componentDidMount() {
        const axios = require('axios');

        const config = {
            withCredentials: 'true',
            credentials: 'same-origin',
            method: 'get',
            url: 'http://localhost:5000/post/all'
        };

        const self = this;

        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                const items = response.data
                self.setState({
                    isLoaded: true,
                    items: items
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const { items } = this.state;
        if (!this.state.isLoaded) {
            return <div>Loading ... </div>;
        } else {
            return (
                <div className="forum">
                    {items.map(item => (
                        <ForumCard id = {item.id} username = {item.username} title = {item.title} content = {item.content} />
                    ))}
                </div>
            );
        }
    }
}