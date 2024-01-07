import React, { Component } from 'react';
import './index.css';

class Super extends Component {
    state = { 
        imageUrl1:'https://assets.ccbp.in/frontend/react-js/rcb-img.png',
        imageUrl2:'https://assets.ccbp.in/frontend/react-js/csk-img.png'
     } 
    render() { 
        return (
            <div className='container d-flex flex-column justify-content-center'>
                <h1 className='heading text-center'>Super Over League</h1>
                <div className='d-flex flex-row justify-content-center m-3'>
                    <img src={this.state.imageUrl1} className='image' alt='pic'/>
                    <img src={this.state.imageUrl2} className='image' alt='pic'/>
                </div>
            </div>
        );
    }
}
 
export default Super;