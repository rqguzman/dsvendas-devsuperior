import React from 'react';
import { SalePage } from 'types/sale';

type Props = {
    page: SalePage;
    onPageChange: Function;
}

const Pagination = ({ page, onPageChange }: Props) => {

    const changePageDownHandler = () => {
        onPageChange(page.number - 1);
    }

    const changePageUpHandler = () => {
        onPageChange(page.number + 1);
    }

    return (
        <div className="row d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={changePageDownHandler}>Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{page.number + 1}</span>
                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={changePageUpHandler}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;