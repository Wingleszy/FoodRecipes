import React, { useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {getFilteredCategory} from '../api';
import { useEffect } from 'react';
import Preloader from '../components/Preloader';
import MealList from '../components/MealList';


const Category = () => {
    const {goBack} = useHistory()
    const [meals, setMeals] = useState([])
    const {name} = useParams()
    getFilteredCategory(name).then(data => setMeals(data.meals))
    useEffect(() => {

    }, [name])
    return <>
        <button className='btn' onClick={goBack}>Go back</button>
        {!meals ? <Preloader /> : <MealList meals={meals} />}    
        </>
    
};

export default Category;