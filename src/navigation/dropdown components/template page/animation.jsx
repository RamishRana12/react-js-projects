import React from 'react'
import Pagesheader from '../Pagesheader'
import Footer from '../../../assets/footer/footer'
import Card from '../pagecards/3dcard'
import { Data } from '../pagecards/array'
import { Category } from '../pagecards/array'
function Animator() {
  return (
    <>
    <div>
    <Pagesheader title="Animation" p="animation"/>
    </div>
    <div className="parent-container">
      {Data.map((arrItem, index) => {
        // Filter category items where category.threed matches array.title
        const matchingCategories = Category.filter(
          (catItem) => catItem.animation === arrItem.title
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
  )
}

export default Animator
