import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Rating from 'react-rating';
import StarFill from 'assets/star-fill.svg';
import Star from 'assets/star.svg';
import RestaurantImg from 'assets/restaurant.jpg';
import { restaurant } from './RestaurantPageConstants';
import PlusCircleIcon from 'assets/plus-circle.svg';
import AddCommentDialog from './AddCommentDialog';
import userService from 'services/userService';
import { useAuth } from '../../contexts/AuthContext';


import './RestaurantPage.scss';
import { Button } from 'react-bootstrap';

const RestaurantPage = ({

}) => {

    const { restaurantId } = useParams();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { currentUser } = useAuth();

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    }

    const handleSendComment = (comment) => {
        userService.addComment({comment, restaurant_id: restaurantId, user_id: currentUser._id});
    };

    return (
        <div className="restaurant-page-wrapper">
            <div className="restaurant-page-header">
                <div className="left-part">
                    <h1 className="header-title"> {restaurant.name} </h1>
                    {
                        Array.from(Array(restaurant.rate).keys()).map((x, index) => {
                            return <img key={index} src={StarFill} alt="rate" />
                        })
                    }
                </div>
                <div className="right-part">
                    <img className="restaurant-img" src={RestaurantImg} alt="rate" />
                </div>
            </div>
            <div className="restaurant-page-content">
                <div className="content-address">
                    <div className="content-address-title">
                        Адрес:
                        </div>
                    <div className="content-address-content">
                        {restaurant.address}
                    </div>
                </div>
                <div className="content-description">
                    <div className="content-address-title">
                        Описание:
                        </div>
                    <div className="content-address-content">
                        {restaurant.description}
                    </div>
                </div>
                <div className="content-rate">
                    <div className="content-rate-col title">
                        <div className="content-rate-title">
                            Атмосфера:
                        </div>
                        <div className="content-rate-title">
                            Обслужване:
                        </div>
                        <div className="content-rate-title">
                            Качество на храната:
                        </div>
                    </div>
                    <div className="content-rate-col content">
                        <div className="content-rate-content">
                            <Rating
                                emptySymbol={<img src={Star} className="icon" />}
                                fullSymbol={<img src={StarFill} className="icon" />}
                            />
                        </div>
                        <div className="content-rate-content">
                            <Rating
                                emptySymbol={<img src={Star} className="icon" />}
                                fullSymbol={<img src={StarFill} className="icon" />}
                            />
                        </div>
                        <div className="content-rate-content">
                            <Rating
                                emptySymbol={<img src={Star} className="icon" />}
                                fullSymbol={<img src={StarFill} className="icon" />}
                            />
                        </div>
                    </div>
                </div>
                <div className="food-wrapper">
                    <div className="title">
                        Предлагани храни:
                    </div>
                    {
                        restaurant.foods.map(x => {
                            return (
                                <div className="food">
                                    {x}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="comment-section">
                    <div className="title">
                        <div className="">
                            Коментари
                        </div>
                        <div>
                            <img onClick={handleOpenDialog} className="add-comment-image" src={PlusCircleIcon} />
                        </div>
                    </div>
                    <div className="content">
                        {
                            restaurant.comments.map(x => {
                                return (
                                    <div className="comment-wrapper">
                                        <div className="comment">
                                            {x}
                                        </div>
                                        <Button >
                                            Блокиране
                                        </Button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <AddCommentDialog
                handleClose={handleCloseDialog}
                isOpen={isDialogOpen}
                restaurantId={restaurantId}
                handleSendComment={handleSendComment}
            />

        </div>
    )
};

export default RestaurantPage;
