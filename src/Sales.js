import React, { Component } from 'react';
import Books from "./Books"

class Sales extends Component {
	
	sumPrice(price){
		this.setState({total: this.state.total + price})
	}

	constructor(props){
		super(props);
	
		this.state = {
			total: 0
		}
		this.sumPrice = this.sumPrice.bind(this)
	}

  render() {
  	var books = this.props.items.map((item, i) => {
  		return <Books title={item.title} author={item.author}
  		price={item.price} key={i} sumPrice={this.sumPrice}
  		active={item.active}
  		 />
  	});
    return (
      <div>
        <h1>Buy your favourite books</h1>
        <div id="books">
        	{books}
        	<div id="total">Total: <b>£{this.state.total}</b></div>
        </div>
      </div>
    );
  }
}


export default Sales;