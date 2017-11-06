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
        
      </div>
    );
  }
}

class Books extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Sales;