import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoryNews from '../News/CategoryNews/CategoryNews';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();

    return (
        <div>
            {id && <h2>All Category News: {categoryNews.length}</h2>}
            <div>
                {
                    categoryNews.map(news => <CategoryNews
                    key={news._id}
                    news={news}
                    ></CategoryNews>)
                }
            </div>

        </div>
    );
};

export default Category;