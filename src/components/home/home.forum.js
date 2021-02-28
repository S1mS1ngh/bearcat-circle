import React from 'react';
import '../../css/home.forum.css'
import 'bootstrap/dist/css/bootstrap.min.css';

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
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}