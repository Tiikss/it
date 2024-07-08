import React from 'react';
import '../styles/pagenumbers.css';

const Pagination = ({ cardsPerPage, totalCards, paginate, currentPage }) => {
    const totalPages = Math.ceil(totalCards / cardsPerPage);
    
    const renderPageNumbers = () => {
        const pages = [];

        if (totalPages <= 3) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            let startPage = Math.max(currentPage - 1, 1);
            let endPage = Math.min(currentPage + 1, totalPages);

            if (currentPage === 1) {
                endPage = 3;
            } else if (currentPage === totalPages) {
                startPage = totalPages - 2;
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
        }

        return pages;
    };

    return (
        <nav>
            <ul className='pagination'>
                <li>
                    <a onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) {
                            paginate(currentPage - 1);
                        }
                    }} href='!#' className='page-link'>←</a>
                </li>

                {renderPageNumbers().map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <a onClick={(e) => {
                            e.preventDefault();
                            paginate(number);
                        }} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}

                <li>
                    <a onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) {
                            paginate(currentPage + 1);
                        }
                    }} href='!#' className='page-link'>→</a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
