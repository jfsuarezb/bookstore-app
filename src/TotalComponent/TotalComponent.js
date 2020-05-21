import React from 'react';
import './TotalComponent.css';

export default class TotalComponent extends React.Component {

    handleClick = (_) => {
        this.props.buy();
    }

    render() {
        return(
            <div className="TotalComponentStyle">
                <h1 style={{width:"85%",margin:"auto"}}>Total: {this.props.total}</h1>
                <h1 style={{width:"85%",margin:"auto"}}>Price: ${this.props.totalPrice}.00</h1>
                <button onClick={this.handleClick}>Buy Books</button>
            </div>
        );
    }
}