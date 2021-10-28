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
                <p>A Fulltstack Expense/Savings management tool This application allows users to record, edit, delete, and view their expenses and saving. This application was created for people who have trouble organizing all their financial expenses and savings and to hopefully make better financial decisions. The front end uses React.js with CSS styling along with bootstrap/reactstrap. The back end is handled by Java and the database is handled by MySQL.</p>
                <a className="clickLinks" href="https://github.com/davempark09/Capstone-Project">Click here for the application source code</a> </div>
        </div>
        );
    }
}

export default Aboutpage;