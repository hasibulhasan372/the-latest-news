import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaRegEye, FaRegStar, FaStar, FaStarHalf } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const CategoryNews = ({ news }) => {
    const { _id, title, details, image_url, published_date, author, total_view, rating } = news;
    return (
        <Card className="text-start">
            <Card.Header>

                <div>
                    <p>{author?.name}</p>
                    <p>{published_date}</p>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <Image src={image_url} fluid />;
                    {details < 250 ? <>{details}</> : <>{details.slice(0,250)}...
                    
                    <Link to={`/news/${_id}`}>Read More</Link>

                    
                    </>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className='flex-grow-1 '>
                    <Rating
                     placeholderRating={rating?. number}
                     emptySymbol={<FaRegStar></FaRegStar>}
                     placeholderSymbol={<FaStar></FaStar>}
                     fullSymbol={<FaStar></FaStar>}
                    >
                       
                    </Rating>
                    <span className='ps-2'>{rating?.number}</span>

                </div>
                <div>

                    <p>
                        <FaRegEye className='pe-2 fs-4'></FaRegEye>
                        {total_view}
                    </p>
                </div>

            </Card.Footer>
        </Card>
    );
};

export default CategoryNews;