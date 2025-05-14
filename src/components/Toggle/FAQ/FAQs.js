import React from 'react'
import faqdata from "./data";
import FAQ from './FAQ';
const FAQs = () => {
  return (
    <div>
      <h1>FAQ</h1>
      {faqdata.map((faq)=>(
        <FAQ key={faq.id} {...faq}/>
      ))}
    </div>
  )
}

export default FAQs;