import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
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

function mapDispatchToProps(dispatch) {
    // Whatever is returned in this function will show up as props 
    //      on the BookList container
    // Whenever selectBook of actions is called, 
    //      the result should be passed to all of the reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
    /**
     * The purpose of BIND action creators and dispatch
     * is specifically to take what gets returned from selectBook
     * and make sure it flows thru all the reducers
     */
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
/**
 * Promote BookList from a component to a container 
 * - it needs to know about the dispatch method, selectBook.
 * Make it available as a prop
 * 
 * We only export the container in a container ('connect', and custom map function), 
 * not the actual class content in the container
 * 
 * With the forge of connect, once the state in mapStateToProps is changed, 
 * the BookList will be re-rendered
 */