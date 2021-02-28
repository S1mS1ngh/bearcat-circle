import React from 'react';
import '../../css/home.forum.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";

export default class HomeForum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
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
                        <Card>
                            {item.id}
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Body>{item.body}</Card.Body>
                        </Card>
                    ))}
                </div>
            );
        }
    }
}