import React, { useState } from 'react';
import './FAQ.css';

const FAQ = ({ id, title, desc }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="faq-container">
      <article className={`faq-box ${toggle ? 'active' : ''}`}>
        <div className="faq-header" onClick={() => setToggle(!toggle)}>
          <h4 className="faq-title">{title}</h4>
          <button className="faq-toggle">{toggle ? '-' : '+'}</button>
        </div>
        {toggle && (
          <p className="faq-desc">{desc}</p>
        )}
      </article>
    </div>
  );
};

export default FAQ;
