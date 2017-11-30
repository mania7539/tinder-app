export function selectBook(book) {
    console.log("A book has been selected: ", book.title);

}
/** 
 * We actually have to make sure that 
 * this action creator is wired up to redux 
 * 
 * for 'export' than 'export default', 
 * we use import {} to get it than import directly
 *  
 * */