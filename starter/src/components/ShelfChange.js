const ShelfChange = ({currentShelf, changeShelf}) => {
    return (
        <div>
            <div className="book-shelf-changer">
            <select
                onChange={(e) => changeShelf(e.target.value)}
                value={currentShelf !== undefined ? currentShelf : "none"}    
            >
                <option value="disabled" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
            </div>
        </div>
    )
}

export default ShelfChange;