import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PortfolioListContent = [
  {
    image: 'image-1',
    category: 'Development',
    link: 'https://www.youtube.com/watch?v=-vXMdAB5Daw',
  },
  {
    image: 'image-2',
    category: 'Development',
    link: 'https://www.youtube.com/watch?v=cI-upw7nSuE',
  },
  {
    image: 'image-3',
    category: 'Development',
    link: 'https://www.youtube.com/watch?v=EGMRImkfaDE',
  },
  {
    image: 'image-4',
    category: 'Development',
    link: 'https://www.youtube.com/watch?v=Hn7QDPXAkpM',
  },
  {
    image: 'image-5',
    category: 'Development',
    link: 'https://www.youtube.com/watch?v=JaByAgHJ9ZQ',
  },
  {
    image: 'image-6',
    category: 'Development',
    link: 'https://www.youtube.com/watch?v=lu_WnJ5Z2do&feature=youtu.be',
  },
];

function PortfolioList({ column, styevariation, item }) {
  const list = PortfolioListContent.slice(0, item);
  return (
    <React.Fragment>
      {list.map((value, index) => (
        <div className={`${column}`} key={index}>
          <div className={`portfolio ${styevariation}`}>
            <div
              className="thumbnail-inner"
              onClick={() => {
                window.open(value.link, '_blank', 'noopener, noreferrer');
              }}>
              <div className={`thumbnail ${value.image}`}></div>
              <div className={`bg-blr-image ${value.image}`}></div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default PortfolioList;
