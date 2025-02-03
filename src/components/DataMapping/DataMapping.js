import React from 'react'; // Importing React library
import './style.css'; // Importing CSS file for styling
import Card from './Card';
import Data from './data.json'

export default function DataMapping() {
    //checking the data is imported correctly
    // console.log(Data)

    ////component listing using for loop
    // let items = []
    // for(var x=0; x<Data.length; x++){
    //     items.push(<Card key={x} cardTitle={Data[x].title} cardDesc={Data[x].desc}/>)
    // }
    // items=Data.map((item)=>
    //   <Card cardTitle={item.title} cardDesc={item.desc}/>
    // )
    return (
    <div>        
      {/* Header section with inline styles */}
      <h1 style={{ backgroundColor: 'purple', textAlign: 'center', padding: '10px', color: 'white', }}>
        Todo App
      </h1>
      {Data.map((item,index)=><Card key={index} cardTitle={item.title} cardDesc={item.desc}/>)}
    </div>
  );
}
