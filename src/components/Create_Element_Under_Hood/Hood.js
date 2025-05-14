import React from 'react'

function Welcome(){
    return(
       <>
        <h6>Welcome</h6>
        <div>
            <i>Tanmay</i>
        </div>
       </>
    )
}

function Welcome1(){
    // return(
    //     React.createElement("h6",{},"Welcome"), // ❌ This does not return multiple elements properly
    //     React.createElement("div",{},
    //         React.createElement("i",{},"Tanmay"))
    // )
    return [
        React.createElement("h6", {}, "Welcome"),
        React.createElement("div", {}, 
        React.createElement("i", {}, "Tanmay"))
    ];
}

export const Hood = () => {
  return (
    <div>
        <h2>How React.js create components under the hood</h2>
        <Welcome/>
        <hr/>
        <Welcome1/>
    </div>
  )
}
