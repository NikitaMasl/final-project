import React, { Component } from 'react';
import { store } from '../index';

class Pokemon extends Component { 
  constructor(props) {
    super(props);
    this.state = {
        data: store.getState().catched
    }
}
getDate=(data, id)=>{
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
           return data[i].date;
    }
  }
}
formatDate(d) {
  let date = d.toLocaleDateString();    
  let time = d.toLocaleTimeString();

  return date +' at '+ time;
}
imgSrc = (id) => {
  this.src = process.env.PUBLIC_URL + '/pokemons/'+id+'.png';
  return this.src;
}
  render(){
    const id=Number(this.props.match.params.id);
    const name=this.props.match.params.name;
    const date = this.getDate(this.state.data, id);
    return (
      <div className="card mb-5 PokemonPage">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={this.imgSrc(id)} 
                        onError={(e) => {
                            e.target.src = process.env.PUBLIC_URL + '/pokemons/no-photo.png';
                        }} className="PokemonImg" alt="pokemon" />
          </div>
          <div className="PokemonText">
            <div className="card-body">
              <h2 className="card-title">Name: {name}</h2>
              <p className="card-text">ID: {id}</p>
              <p className="card-text">{
                date ? 'This pokemon was caught on '+this.formatDate(date) : 'This pokemon has not been caught yet'
              }</p>
            </div>
          </div>    
        </div>
      </div>
  );
}
}

export default Pokemon;

