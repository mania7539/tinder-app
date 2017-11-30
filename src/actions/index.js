export function selectBook(book) {
    console.log("A book has been selected: ", book.title);

    // selectBook is an action creator, it needs to return an action,
    //      an object with a type property
    // actions usually have 2 values: type and payload,
    //      type is for describing the purpose of the action,
    //      payload further describes or clarifies the conditions of the action that's being triggered
    return ({
        type: "BOOK_SELECTED",
        payload: book
    });

}
/** 
 * We actually have to make sure that 
 * this action creator is wired up to redux 
 * 
 * for 'export' than 'export default', 
 * we use import {} to get it than import directly
 *  
 * */