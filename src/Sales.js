import React, { Component } from 'react';

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

class Books extends Component {

	clicker(){
		var active = !this.state.active
		this.setState({active: active})
		this.props.sumPrice(active ? this.props.price : -this.props.price)
	}

	constructor(props){
		super(props);
	
		this.state = {
			active: false
		}
		this.clicker = this.clicker.bind(this)
	}


  render() {
  	console.log(this.state)
    return (
      <div>
        <p onClick={this.clicker}>{this.props.title}, {this.props.author}: <b>£{this.props.price}</b></p>
      </div>
    );
  }
}

export default Sales;