import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://the-latest-news-server-hasibulhasan372.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2>All Category</h2>
            <div className='mt-5'>
                {
                    categories.map(category => <p key={category.id} >
                        <Link to={`./${category.id}`} className='text-decoration-none fs-4 fw-semibold text-secondary'>{category.name}</Link>
                    </p>)
                }
            </div>

        </div>
    );
};

export default LeftNav;