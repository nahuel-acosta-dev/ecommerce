import React from 'react';
import {Link} from 'react-router-dom';

const Categories = ({categories}) =>{

    return(
        <div className="mb-8 mt-8">
            {/*<!-- title -->*/}
            <h5 className="mb-3">Categories</h5>
            {/*<!-- nav -->*/}
            <ul className="nav nav-category" id="categoryCollapseMenu">
               {
                  categories &&
                  categories !== null &&
                  categories !== undefined &&
                  categories.map((category, i) => (
                     <li key={i} className="nav-item border-bottom w-100 collapsed" data-bs-toggle="collapse"
                        data-bs-target="#categoryFlushOne" ariaExpanded="false" aria-controls="categoryFlushOne">
                        <Link to="/"
                           className="nav-link"> {category.name} <i className="feather-icon icon-chevron-right"></i></Link>
                        {/*<!-- accordion collapse -->*/}
                        <div id="categoryFlushOne" className="accordion-collapse collapse"
                           data-bs-parent="#categoryCollapseMenu">
                           <div>
                              {/*<!-- nav -->*/}
                              <ul className="nav flex-column ms-3">
                                 {/*<!-- nav item -->*/}
                                 {
                                    category.sub_categories.map((cat, i) => (
                                       <li className="nav-item" key={`${cat.name}-${i}`}>
                                          <Link to="/" className="nav-link">{cat.name}</Link>
                                       </li>
                                    ))
                                 }
                                 
                              </ul>
                           </div>
                        </div>
                     </li>
                  ))
               }
               {/*<!-- nav item -->*/}
               <li className="nav-item border-bottom w-100 collapsed" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo" ariaExpanded="false" aria-controls="flush-collapseTwo">
                  <Link to="/"
                     className="nav-link">
                  Snacks 
                  Munchies <i className="feather-icon icon-chevron-right"></i>
                  </Link>
                  {/*<!-- collapse -->*/}
                  <div id="flush-collapseTwo" className="accordion-collapse collapse"
                     data-bs-parent="#categoryCollapseMenu">
                     <div>
                        <ul className="nav flex-column ms-3">
                           {/*<!-- nav item -->*/}
                           <li className="nav-item"><Link to="/" className="nav-link">Chips  Crisps</Link></li>
                           {/*<!-- nav item -->*/}
                           <li className="nav-item"><Link to="/" className="nav-link">Nachos</Link></li>
                           {/*<!-- nav item -->*/}
                           <li className="nav-item"><Link to="/" className="nav-link">Popcorn</Link></li>
                           {/*<!-- nav item -->*/}
                           <li className="nav-item"><Link to="/" className="nav-link">Bhujia  Mixtures</Link></li>
                           {/*<!-- nav item -->*/}
                           <li className="nav-item"><Link to="/" className="nav-link">Namkeen Snacks</Link></li>
                           {/*<!-- nav item -->*/}
                           <li className="nav-item"><Link to="/" className="nav-link">Healthy Snacks</Link></li>
                           {/*<!-- nav item -->*/}
                           <li className="nav-item"><Link to="/" className="nav-link">Cakes  Rolls</Link></li>
                           {/*<!-- nav item -->*/}
                           <li className="nav-item"><Link to="/" className="nav-link">Energy Bars</Link></li>
                           {/*<!-- nav item -->*/}
                           <li className="nav-item"><Link to="/" className="nav-link">Papad  Fryums</Link></li>
                           {/*<!-- nav item -->*/}
                           <li className="nav-item"><Link to="/" className="nav-link">Rusks  Wafers</Link></li>
                        </ul>
                     </div>
                  </div>
               </li>
            </ul>
         </div>
    )
}

export default Categories;