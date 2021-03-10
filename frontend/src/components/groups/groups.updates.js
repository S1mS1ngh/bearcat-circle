import React from 'react';
import '../../css/groups.updates.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateCard from "./update.card";

export default class GroupsUpdates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        fetch('SampleUpdates.json')
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
                <div className="updates">
                    {items.map(item => (
                        <UpdateCard id = {item.id} title = {item.title} body = {item.body} />
                    ))}
                </div>
            );
        }
    }
}