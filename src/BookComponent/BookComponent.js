import React from 'react';
import './BookComponent.css';

export default class BookComponent extends React.Component {

    handleClick = (_) => {
        this.props.onClick(this.props.book);
    }

    render() {
        let book = this.props.book;
        return (
            <div className="BookComponentStyle">
                <img src={this.props.book.image} alt="" />
                <p className="Title">{this.props.book.name}</p>
                <p className="Rating">{this.props.book.rating} stars</p>
                <p>${this.props.book.price}.00</p>
                <button onClick={(_) => this.props.onClick(book)}>Add To Cart</button>
            </div>
        );
    }
}