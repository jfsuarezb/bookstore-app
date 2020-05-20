import React from 'react';
import './BookComponent.css';

export default class BookComponent extends React.Component {
    render() {
        return (
            <div className="BookComponentStyle">
                <img src={this.props.book.image} alt=""/>
                <p>{this.props.book.name}</p>
                <p>{this.props.book.rating} stars</p>
                <p>${this.props.book.price}.00</p>
            </div>
        );
    }
}