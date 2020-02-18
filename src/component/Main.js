import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';
import Pagination from './Pagination';

const DB = "http://localhost:3001/pokemons";

function Main() {
    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(100);
    
    useEffect(() => {
        const fetchPosts = async () => {
        const res = await axios.get(DB);
        setCards(res.data);
        };
    
        fetchPosts();
    }, []);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards= cards.slice(indexOfFirstCard, indexOfLastCard);
    const paginate = pageNumber => setCurrentPage(pageNumber);

        return(
        <div>
        <div className="d-flex flex-wrap w-100 justify-content-center" id="main`">
                {currentCards.map(pokemon => (
                    <div key = {pokemon.id} className="p-2 bd-highlight">
                        <Card name = {pokemon.name} id ={pokemon.id} />
                    </div>
                ))}
        </div>
        <Pagination 
                 cardsPerPage={cardsPerPage}
                 totalCards={cards.length}
                 paginate={paginate}
                />
        </div>
        )
}

export default Main;
