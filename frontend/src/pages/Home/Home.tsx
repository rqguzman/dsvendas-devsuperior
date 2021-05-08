import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">DSVendas</h1>
                    <p className="lead">Analyze your sales' performance through different perspectives</p>
                    <hr />
                    <p>This application displays a dashboard from data provided by a backend built with Spring Boot.</p>
                    <Link to="/dashboard" className="btn btn-primary btn-lg">
                        Dashboard
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Home;