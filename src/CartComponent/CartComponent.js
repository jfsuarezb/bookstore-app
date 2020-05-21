import React from 'react';
import './CartComponent.css';
import CartBookComponent from '../CartBookComponent/CartBookComponent.js';
import TotalComponent from '../TotalComponent/TotalComponent.js'

export default class CartComponent extends React.Component {
    render() {
        let CartBookComponents = this.props.booksAddedToCart.map((book) => (<CartBookComponent key={book.id} bookToRender={book} removeFromCart={this.props.removeFromCart}/>));
        let total = this.props.booksAddedToCart.length;
        let totalPrice = this.props.booksAddedToCart.reduce((sum,current) => (sum += current.price),0);
        return (
            <div className="CartComponentStyle">
                <h1><i>Your Cart</i></h1>
                {CartBookComponents}
                <TotalComponent total={total} totalPrice={totalPrice} buy={this.props.buy}/>
            </div> 
        );
    }
}