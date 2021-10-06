import React from 'react';
import { Card } from './Card';
import Image1 from '../Images/Astro.png';
import Image2 from '../Images/Analytics.png';
import Image3 from '../Images/Bio-2.png';
import Image4 from '../Images/Chem.png';
import Image5 from '../Images/data.png';
import Image6 from '../Images/Maths.png';

export const Courses = () => {
    return (
        <div className="courses-contain">
            <span id="course-head">Popular courses this month:</span>
            <div className="card-contain">
                <Card img={Image1} title="Astronomy-1" />
                <Card img={Image2} title="Data Anayltics-3" />
                <Card img={Image3} title="Biology-2" />
                <Card img={Image4} title="Chemistry-3" />
                <Card img={Image5} title="Applied Physics-2" />
                <Card img={Image6} title="Mathematics-1" />
            </div>
        </div>
    )
}
