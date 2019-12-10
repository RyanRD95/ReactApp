import React from 'react';
import '../css/Catalog.css';

class Catalog  extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
        <div className="catalog">
            {
              this.props.books.map( (book, i) => {
                return (
                    <div
                        className="book"
                        key={book.title}>
                      <img src={book.amazonImage} width="50%" alt = {book.title} />
                      <p>
                        <strong>{book.title} </strong><br />
                        by {book.author}
                      </p>
                      <p className="price"> ${book.price}</p>
                      <p>
                        <button id={book.id} onClick={this.props.addToChart}>Add to Chart</button>
                      </p>

                </div>
                );
              })
            }
        </div>
    )
  }
}

export default Catalog;
