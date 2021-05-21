import React, { Component } from 'react';
import "./cardContainer.css"

class Card extends Component {
        state = {
            flip: false
        }
    render() {
        const {hp,name,sprites,} = this.props.pokemon
        const uppercased = name.toUpperCase()
        return (
            <div className="pokemon-card">
                <img onMouseLeave={()=> this.setState({flip: !this.state.flip})} onMouseOver={()=> this.setState({flip: !this.state.flip})} src={this.state.flip ?  sprites.back : sprites.front } alt="" />
                <h3>{uppercased}</h3>
                <p> 🧡 HP: {hp}</p>              
                           
            </div>
        );
    }
}

export default Card;
