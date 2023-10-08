import React from 'react';


import './CardPage.styles.css'

class ProductSVG extends React.Component {

    constructor(props) {
        super(props);

    };



    render() {
        if(this.props.type === "Round bar")
        {
            return(
                <svg width="120" height="120">
                    <circle cx="60" cy="60" r="50" fill="grey" />   
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill='white' font-size="18" font-family="Calibri">{this.props.material}</text>                 
                </svg>    
        )}
        else if(this.props.type === "Square bar") {
            return(
                <svg className='card-info-svg' width="120" height="120">
                    <rect x="10" y="10" width="100" height="100" fill="grey" />
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill='white' font-size="18" font-family="Calibri">{this.props.material}</text>     
                </svg>
        )}
        else if(this.props.type === "Round pipe") {
            return(
                <svg className='card-info-svg' width="120" height="120">
                    <circle cx="60" cy="60" r="50" stroke="grey" stroke-width="5" fill="#181a1b" />
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill='white' font-size="18" font-family="Calibri">{this.props.material}</text>     
                </svg>
        )}
        else if(this.props.type === "Square pipe") {
            return(
                <svg className='card-info-svg' width="120" height="120">
                    <rect x="10" y="10" width="100" height="100" stroke="grey" stroke-width="5" fill="#181a1b" />
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill='white' font-size="18" font-family="Calibri">{this.props.material}</text>     
                </svg>
        )}
    }
}

export default ProductSVG;