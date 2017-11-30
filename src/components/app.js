import React, { Component } from "react";
import { connect } from "react-redux";
import BookList from '../containers/book-list';

// Create a new component. 
// This component will produce some HTML
export default class App extends Component {
    render() {
        return (
            <div>
                <BookList />
            </div>
        );
    }
}