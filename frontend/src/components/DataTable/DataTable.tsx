import axios from 'axios';
import Pagination from 'components/Pagination/Pagination';
import React, { useEffect, useState } from 'react';
import { SalePage } from 'types/sale';
import { formatLocalDate } from 'utils/format';
import { BASE_URL } from 'utils/requests';

const DataTable = () => {

    const [activepage, setActivepage] = useState(0);

    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    })

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activepage}&size=20&sort=date,desc`)
            .then((response) => {
                setPage(response.data);
            })
    }, [activepage]);

    const changePageHandler = (index: number) => {
        setActivepage(index);
    }

    return (
        <>
            <Pagination onPageChange={changePageHandler} page={page}/>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Seller</th>
                            <th>Customer Visits</th>
                            <th>Sales Settled</th>
                            <th>Sales Values</th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(item => (
                            <tr key={item.id}>
                                <td>{formatLocalDate(item.date, 'dd/MM/yyyy')}</td>
                                <td>{item.seller.name}</td>
                                <td>{item.visited}</td>
                                <td>{item.deals}</td>
                                <td>{item.amount.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default DataTable;