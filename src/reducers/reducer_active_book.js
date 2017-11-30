// The state argument of the function is not application state, 
//  only the state this reducer is responsible for 
// 
// Once a specific action is triggered, 
//  it can change the state by its way
//
// 'state = null' is an ES6 syntax, it says
//  when an argument comes in and its value is undefined, then set its value to 'null'
export default function (state = null, action) {
    // state += 1;
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;

    }
    // Never mutate current state to produce a new version of the state, 
    //  the object that return from our reducer must always be 100% fresh and clean, 
    //  like: ```state.title = book.title; return state;``` this is not a refresh object
    //
    return state;
    // the 1st case, we don't care about the action
}