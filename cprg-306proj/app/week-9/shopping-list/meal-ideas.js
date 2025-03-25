"use client";
import { useState } from "react";
import { useEffect } from "react";

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        const mealsData = await fetchMealIdeas(ingredient);
        setMeals(mealsData);
    }

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas for {ingredient}</h2>
            {meals.length > 0 ? (
                <ul>
                    {meals.map((meal) => (
                        <li key={meal.idMeal}>{meal.strMeal}</li>
                    ))}
                </ul>
            ) : (
                <p>No meals found for this ingredient.</p>
            )}
        </div>
    );
};

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
}

export default MealIdeas;