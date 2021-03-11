import React from 'react';
import '../../css/home/home.forum.css'
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

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        fetch('SampleForum.json')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
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
                        <ForumCard id = {item.id} title = {item.title} body = {item.body} />
                    ))}
                </div>
            );
        }
    }
}