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
	}

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Sales;