
import React, { Component } from 'react';
import Card from "./Card"
import "./cardContainer.css"


   

class CardContainer extends Component {
    state = {
        searchCriteria: "",
        pokemonList: [],
        name: "",
        hp: "",
        frontURL: "",
        backURL: "",
    }

    
   componentDidMount() {
    this.setState({
        pokemonList: this.props.pokemonData[0].pokemon
    })
   }
   
   searchCriteria = (event) =>{
       const search = event.target.value.toLowerCase()
    
           this.setState({
               searchCriteria:search
           })

       
   }
   handleSubmit = (event) => {
       event.preventDefault()
       const newPokemon = {
        name:this.state.name,
        hp:this.state.hp,
        sprites:{
            front:this.state.frontURL,
            back:this.state.backURL
        }
       }
       const newPokemonList = [
           newPokemon, ...this.state.pokemonList
       ]
       this.setState({
           pokemonList: newPokemonList
    })
   }
    render() {
        
        
        
        const filteredData = this.state.pokemonList.filter(pokemon => pokemon.name.includes(this.state.searchCriteria)) ? this.state.pokemonList.filter(pokemon => pokemon.name.includes(this.state.searchCriteria)) :this.state.pokemonList

        
        return (
            <div className="main-card-container">
                <div>
                <input className="search-field" onChange={(e)=>this.searchCriteria(e)} type="text" placeholder="Search for a pokemon"/>

                </div>
                {/* form */}
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={(e) => {this.setState({
                            name: e.target.value
                        })}} className="create-field"type="text" placeholder="Enter a Name"/>

                        <input onChange={(e) => {this.setState({
                            frontURL: e.target.value
                        })}} className="create-field" type="text" placeholder="Enter front URL"/>

                        <input onChange={(e) => {this.setState({
                            hp: e.target.value
                        })}} className="create-field" type="text" placeholder="Enter a HP"/>

                        <input onChange={(e) => {this.setState({
                            backURL: e.target.value
                        })}} className="create-field" type="text" placeholder="Enter back URL"/>

                        <button className="create-button">Create</button>
                    </form>
                </div>
                <div className="card-container">

                {filteredData.map((singlePokemon,index) => <Card key={singlePokemon.name}  pokemon={singlePokemon}  />
                )}
                </div>
              
            </div>
        );
    }
}

export default CardContainer;
