import React, { Component } from 'react';
import {store} from '../index';
import Card from './Card';

class CapturePok extends Component {
    constructor(props){
        super(props);
        this.state = {
            catchedPokemons: store.getState().catched
        }
    }
    render() {
        if(this.state.catchedPokemons.length === 0){
            return(
                <div className='CaptureText'>
                <h1>You have not caught any pokemons yet</h1>
                </div>
            )
        }else{
        return (
            <div className="d-flex flex-wrap w-100 justify-content-center">
                {this.state.catchedPokemons.map( pokemon =>(
                    <div key={pokemon.id} className="p-2 bd-highlight">
                        <Card 
                            id={pokemon.id}
                            name={pokemon.name}
                        />
                    </div>
                ))}
            </div>
        )
    }
    }
}
export default CapturePok;
