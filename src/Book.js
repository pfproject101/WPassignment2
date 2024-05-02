import React, { Component } from "react";


class Book extends Component{

    constructor(props){
        super(props)
        this.state = {
            count:1,
            view: "grid"
        }
    }

    Increment = () =>{
        this.setState({
            count: this.state.count+1
        })
    }

    displayBookList = ()=>{
        // history.push('https://www.google.com.pk/')
        this.setState((currState) => ({
            view: currState.view =="grid" ? "list" : "grid"
        }))
      }

    render(){

        const booksData = [
            { id: 1, name: 'Book 1', genre: 'Fiction', CoverImage: 'book1.jpg' },
            { id: 2, name: 'Book 2', genre: 'Non-fiction', CoverImage: 'book2.jpg' },
            { id: 3, name: 'Book 3', genre: 'Science Fiction', CoverImage: 'book3.jpg' },
            { id: 4, name: 'Book 4', genre: 'Fantasy', CoverImage: 'book4.jpg' },
            { id: 5, name: 'Book 5', genre: 'Mystery', CoverImage: 'book5.jpg' },
            { id: 6, name: 'Book 6', genre: 'Thriller', CoverImage: 'book6.jpg' },
            { id: 7, name: 'Book 7', genre: 'Romance', CoverImage: 'book7.jpg' },
            { id: 8, name: 'Book 8', genre: 'Historical Fiction', CoverImage: 'book8.jpg' },
          ];
        

        return ( 
        <div>
            <button onClick={this.displayBookList}>{this.state.view=="list"? "Grid View": "List View"}</button>
            <div className="searchbar">
                <input
                    type = "text"
                    placeholder = "Search Book"
                />
            </div>
            {this.state.view=="grid" && (
            <table>
                <tr>
                    {booksData.map((book) => (
                        <td>
                            <img src={book.CoverImage} alt={book.name}/>
                            <div className="bookInfo">
                                <h3>{book.name}</h3>
                                <p>{book.genre}</p>
                            </div>
                        </td>
                    ))}
                </tr>
            </table>
            )}
            {this.state.view =="list" && (
            <table>
                    {booksData.map((book) => (
                        <tr>
                            <td>
                                <h3>{book.name}</h3>
                            </td>
                            <td>
                                <p>{book.genre}</p>
                            </td>
                        </tr>
                    ))}
            </table>
            )}
        </div>
     )}
}
 
export default Book;