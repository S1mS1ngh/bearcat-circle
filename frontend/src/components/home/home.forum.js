import React from 'react';
import '../../css/home/home.forum.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ForumCard from "./forum.card";
import ThreadDisplay from '../Post/ThreadDisplay';
import firebase from 'firebase/app';
import 'firebase/database';

export default class HomeForum extends React.Component {
    constructor(props) {
        super(props);

        const config =
        {
            apiKey: "AIzaSyDaj-viOsJb6Iibb8JChqPD7pAv3IJToS0",
            authDomain: "bearcat-circle.firebaseapp.com",
            databaseURL: "https://bearcat-circle-default-rtdb.firebaseio.com",
            projectId: "bearcat-circle",
            storageBucket: "bearcat-circle.appspot.com",
            messagingSenderId: "343522068166",
            appId: "1:343522068166:web:5352db95ea285e63c179c7",
            measurementId: "G-C7Q90SCRL7"
        };

        this.app = firebase.initializeApp(config);
        this.database = this.app.database();
    }

    render() {
        return (
            <ThreadDisplay database={this.database} />
        );
    }
}