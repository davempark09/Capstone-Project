import React, { Component } from 'react';

class Aboutpage extends Component {
    render() {
        return (
            <div className="aboutPage">
            <div className="imageCont">
                <img alt='Money Management Img' className="aboutImg" src="\picture1.jpg"/>
            </div>
            <div className="appInfo">
                <h1>About the Application</h1>
                <p>This application allows users to record/track their expenses and savings. Users can add, delete, update, and view their added entries made to hopefully make better financial decisions in the future.</p>
                <a className="clickLinks" href="https://github.com/davempark09/Capstone-Project">Click here for the application source code</a> </div>
        </div>
        );
    }
}

export default Aboutpage;