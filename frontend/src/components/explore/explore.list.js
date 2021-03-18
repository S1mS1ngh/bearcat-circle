import React from 'react';
import '../../css/explore/explore.list.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ExploreCard from "./explore.card";

export default class ExploreList extends React.Component {
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
                <div className="exploreList">
                    {items.map(item => (
                        <ExploreCard name = {item.name} title = {item.title} body = {item.body} styleColor = {item.styleColor}/>
                    ))}
                </div>
            );
        }
    }
}