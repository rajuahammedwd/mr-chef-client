/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Card } from 'flowbite-react';
import React from 'react';
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
const Chef = ({ chef }) => {
    const { id, name, image, experience, recipes, likes } = chef;
    return (
        <div className="max-w-sm ">
            <Card>
                <LazyLoad height={300}  offset={50}>
                    <img className='h-[300px] w-full '  src={image} alt="" />
                </LazyLoad>
                <div className='flex justify-between mt-5'>
                    <h5 className="text-2xl font-bold tracking-tight  dark:text-white">
                        {name}
                    </h5>
                    <span className='flex '> <FaThumbsUp className='w-5 h-5 text-blue-500 me-2' /> {likes} </span>
                </div>
                <div className='flex justify-between'>
                    <p>{experience}</p>
                    <p>{recipes.length} Recipes</p>
                </div>

                <Link to={`/chef/${id}`} className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>View Recipes </Link>
            </Card>
        </div>
    );
};

export default Chef;