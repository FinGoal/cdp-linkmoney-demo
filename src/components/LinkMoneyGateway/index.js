import React from 'react';
import './style.css'

class IframeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkMoneyWebGatewayLink: ''
    };
  }

  componentDidMount() {
    window.addEventListener('message', this.handleMessage);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handleMessage);
  }

  handleMessage = (event) => {
    console.log('|----------------- (events) ------------------|');
    console.log(event.data);
    console.log('|---------------------------------------------|');
  }

  handleTextChange = (event) => {
    this.setState({
      linkMoneyWebGatewayLink: event.target.value,
    });
  }

  render() {
    return (
      <div className='center'>
         <textarea onChange={this.handleTextChange} placeholder='Type the LinkMoney Gateway URI' />
        <iframe src={this.state.linkMoneyWebGatewayLink} />
      </div>
    )
  }
}

export default IframeComponent;
