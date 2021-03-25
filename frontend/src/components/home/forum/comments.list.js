import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/home/comments.list.css';
import ForumComment from "./forum.comment";
import ForumCard from "./forum.card";

export default class CommentsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    // componentDidMount() {
    //     // fetch('https://jsonplaceholder.typicode.com/comments')
    //     fetch('SampleComments.json')
    //         .then(res => res.json())
    //         .then(result => {
    //             this.setState({
    //                 isLoaded: true,
    //                 items: result
    //             });
    //         });
    // }

    componentDidMount() {
        const axios = require('axios');

        const config = {
            withCredentials: 'true',
            credentials: 'same-origin',
            method: 'get',
            url: 'http://localhost:5000/post/' + this.props.id + '/comments/'
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
                <div style={{height: "300px", overflow: "scroll"}} className="comments">
                    {items.map(item => (
                        <ForumComment username = {item.username} content = {item.content}/>
                    ))}
                </div>
            );
        }
    }
}