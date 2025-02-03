import React from 'react'; // Importing React library
import './style.css'; // Importing CSS file for styling

export default function PropsDestructuringFunctional(props) {
    console.log(props);
    const {cardTitle,cardDesc}=props;
    // const todoTitle = "Call Family";
    // const todoDesc = "It was during this training, when Major Anil ing. He thought of offering such solution for Indian Army as well. He created Spec Ops – Apparel and tactical gear designed for the toughest military operations.";

    // Getting the current date
    const fullDate = new Date();
    const date = fullDate.getDate() + "/" + fullDate.getMonth() + "/" + fullDate.getFullYear();

    return (
        <div>
            {/* Card container with styles */}
            <div className="card-style">
                <h3 className='card-title'>{cardTitle}</h3> {/* Displaying the Todo Title */}
                <p className="card-desc">{cardDesc}</p> {/* Displaying the Todo Description */}
                <p className="card-date">{date}</p> {/* Displaying the Current Date */}
            </div>            
        </div>
    );
}
