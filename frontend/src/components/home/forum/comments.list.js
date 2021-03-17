import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/home/comments.list.css';
import ForumComment from "./forum.comment";

export default class CommentsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        fetch('SampleComments.json')
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
                <div style={{height: "300px", overflow: "scroll"}} className="comments">
                    {items.map(item => (
                        <ForumComment name = {item.name} title = {item.title} body = {item.body}/>
                    ))}
                </div>
            );
        }
    }
}