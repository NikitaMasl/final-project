import React from 'react'

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className='pagination justify-content-center'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item text-center'>
              <button onClick={() => paginate(number)} className='page-link pagination'>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Pagination;