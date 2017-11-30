import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            // this.props.book is null or undefined
            return <div>Select a book to get started.</div>;
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Titles: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return ({
        book: state.activeBook
    });
}

export default connect(mapStateToProps)(BookDetail);