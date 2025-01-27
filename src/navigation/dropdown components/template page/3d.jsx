import React from 'react';
import { Data } from '../pagecards/array.js';
import { Category } from '../pagecards/array.js';
import Pagesheader from '../Pagesheader.jsx';
import Card from '../pagecards/3dcard';
import Footer from '../../../assets/footer/footer.jsx';
function Three() {
  return (
    <>
    <div>
    <Pagesheader title='3D' p="3D"/>
  
     </div>
    <div className="parent-container">
      {Data.map((arrItem, index) => {
        // Filter category items where category.threed matches array.title
        const matchingCategories = Category.filter(
          (catItem) => catItem.threed === arrItem.title
        );

        return (
          <div className="child-container" key={index}>
            <div
              className="featured-row"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}
            >
              {matchingCategories.length > 0 ? (
                matchingCategories.map((item, catIndex) => (
                  <Card key={catIndex} item={item} />
                ))
              ) : (
                <p>No items found</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
    <div className='pagefooter-margin'>
     <Footer/>
     </div>
    </>
  );

  
}




  
          
          

export default Three
