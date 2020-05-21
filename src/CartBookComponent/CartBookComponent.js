import React from 'react';
import './CartBookComponent.css';

export default class CartBookComponent extends React.Component {

    handleClick = (_) => {
        this.props.removeFromCart(this.props.bookToRender);
    }

    render() {
        return(
            <div className="CartBookComponentStyle">
            <p className="CartBooksubCompStyle"><b>{this.props.bookToRender.name}</b></p>
            <p className="CartBooksubCompStyle">${this.props.bookToRender.price}.00</p>
            <button className="CartBooksubCompStyle" onClick={this.handleClick}>X</button>
            </div>
        );
    }
}