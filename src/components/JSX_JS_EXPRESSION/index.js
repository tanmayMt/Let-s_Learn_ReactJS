import React from 'react'

export default function JSX_JS_expression() {
    const todoTitle = "Call Family"
    const todoDesc = "Ipsum no sea sadipscing consetetur vero. Nonumy justo diam sed lorem sit, sed sit clita sit takimata sed sanctus invidunt."
    const fullDate = new Date();
    const date = fullDate.getDate() + "/" + fullDate.getMonth() + "/"+ fullDate.getFullYear();
    return (
        <div>
            <h1 style={{color:"red"}}>
                Todo App
            </h1>
            <h2>Todo Title: {todoTitle}</h2>
            <p><b>It was during this training, when Major Anil ing. He thought of offering such solution for Indian Army as well. He created Spec Ops – Apparel and tactical gear designed for the toughest military operations.</b></p>
            <p>Date: {date}</p>
        </div>
    )
}
