'use client'
import React, { useState } from 'react';
import { IconStar } from '@/app/_components/icons/icons';
import {twMerge} from "tailwind-merge"; // Adjust the import path as needed

interface StarRatingProps {
    initialRating?: number;
    onRatingChange?: (rating: number) => void;
    disabled?: boolean;
    starClasses?: string
}

const StarRating: React.FC<StarRatingProps> = ({ initialRating = 0, onRatingChange, disabled = false  , starClasses}) => {
    const [rating, setRating] = useState<number>(initialRating);
    const [hoverRating, setHoverRating] = useState<number>(0);

    const handleMouseEnter = (index: number) => {
        if (!disabled) {
            setHoverRating(index);
        }
    };

    const handleMouseLeave = () => {
        if (!disabled) {
            setHoverRating(0);
        }
    };

    const handleClick = (index: number) => {
        if (!disabled) {
            setRating(index);
            if (onRatingChange) {
                onRatingChange(index);
            }
        }
    };

    const renderStar = (index: number) => {
        const isFilled = index <= (hoverRating || rating);
        return (
            <IconStar
                key={index}
                className={twMerge(`stroke-secondary cursor-pointer ${isFilled ? 'fill-secondary' : ''}` , starClasses)}
            />
        );
    };

    return (
        <div className="flex w-fit flex-row-reverse">
            {[1, 2, 3, 4, 5].map((index) => (
                <div
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(index)}
                >
                    {renderStar(index)}
                </div>
            ))}
        </div>
    );
};

export default StarRating;
