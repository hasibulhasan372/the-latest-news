import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const selectedNews = useLoaderData();
    const { _id, title, details, image_url, published_date, author, total_view, rating } = selectedNews;
    
    return (
        <Container>
            <div>
                <h3>{title}</h3>
                <img className='imf-fluid w-100' src={image_url} alt="" />
                <p>{details}</p>
                <Link to='/' className='btn btn-danger'>Back to Home </Link>
            </div>
        </Container>
    );
};

export default News;