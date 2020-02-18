import React, { Component } from 'react'
import { 
    Link, BrowserRouter
 } from 'react-router-dom';
import { connect } from 'react-redux';
import { catchPokemon } from '../store/coughtAction';
import { bindActionCreators } from 'redux';

class Card extends Component{ 
    imgSrc = (id) => {
        this.src = process.env.PUBLIC_URL + '/pokemons/'+id+'.png';
        return this.src;
    }
    getCapture=(id)=>{
            for (let i = 0; i < this.props.catched.length; i++) {
            if (this.props.catched[i].id === id) {
                    return this.props.catched[i];
            }
            }
        }       
    componentDidMount() {
        if(this.getCapture(this.props.id)){
            document.getElementById('btn'+this.props.id).classList.remove("btnColorCard");
        }
      }
    UNSAFE_componentWillMount(){
        sessionStorage.clear();
    }
    render(){  
        const {catchPokemon} = this.props;

    return(
        <div className="card  justify-content-center pokeCard" style={{width: "304px", height:"470px"}}>
            <Link to={'/pokemon/'+this.props.id+'/'+this.props.name} className="noneDecorated spetialForIECard">          
                <img src={this.imgSrc(this.props.id)} 
                        onError={(e) => {
                            e.target.src = process.env.PUBLIC_URL + '/pokemons/no-photo.png';
                        }}
                        className="card-img-top" id = {"img"+this.props.id} alt="pokemon" />
            <div className="card-body">
                {(this.props.name.length<10) 
                ? <h1 className="card-text text-sm-center">{this.props.name}</h1>
                : (this.props.name.length<14) 
                        ?<h2 className="card-text text-sm-center ">{this.props.name}</h2>
                        :<h4 className="card-text text-sm-center ">{this.props.name}</h4>
                }
            </div>
            </Link> 
            <div className="card-body text-sm-center ">
                <button className="btn btnColor btnColorCard"  id={"btn"+this.props.id} onClick={()=>{
                    let date =new Date();
                    catchPokemon(this.props.id, this.props.name, true, date);
                    document.getElementById('btn'+this.props.id).classList.remove("btnColorCard");
                }}
                disabled = {this.getCapture(this.props.id)} >
                    {this.getCapture(this.props.id) ? 'Pokemon is catched' : 'Catch pokemon'} 
            </button>
            </div>
        </div>
    )
}
}
const putStateProps = (state) => {
    return {
        catched: state.catched
    };
};

const putActionToProps = (dispatch) => {
    return {
        catchPokemon: bindActionCreators(catchPokemon, dispatch)
    }
};

export default connect(putStateProps, putActionToProps)(Card);




