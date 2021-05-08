import BarChart from 'components/BarChart/BarChart';
import DataTable from 'components/DataTable/DataTable';
import DonutChart from 'components/DonutChart/DonutChart';
import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';
import React from 'react';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="text-primary py-3">Sales Dashboard</h1>
                <div className="row px-3">

                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Success rate (%)</h5>
                        <BarChart />
                    </div>

                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Success rate (%)</h5>
                        <DonutChart />
                    </div>
                </div>
                <div className="py-3">
                    <h2 className="text-primary">All sales (%)</h2>
                </div>
                <DataTable />
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;