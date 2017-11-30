import React, { Component } from "react";

export default class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">
                    {book.title}
                </li>   
            );
        });
    }

    render() {
        // console.log(this.props.asdf);
        // The above will show 123, if asdf: 123 is defined in mapStateToProps
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned in this function will show up as props
    // inside of BookList, 
    //      so we define the books as renderList does
    //      and we want the value of the books to be the value of state argument
    return ({
        books: state.books
    });
}
/** 
 * This function takes the application state as an argument 
 * AND this creates a connection between redux and our container
 * 
 * Our books reducer will produce our book property for above code (state.books)
*/

export default connect(mapStateToProps)(BookList);
/**
 * We only export the container in a container ('connect', and custom map function), 
 * not the actual class content in the container
 */