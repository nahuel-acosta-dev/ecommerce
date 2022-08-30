import React from "react";

const Rating = () => {

    return(
        <div className="mb-8">
         {/*<!-- rating -->*/}
            <h5 className="mb-3">Rating</h5>
            <div>
               {/*<!-- form check -->*/}
               <div className="form-check mb-2">
                  {/*<!-- input -->*/}
                  <input className="form-check-input" type="checkbox" value="" id="ratingFive"/>
                  <label className="form-check-label" for="ratingFive">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning "></i>
                  <i className="bi bi-star-fill text-warning "></i>
                  <i className="bi bi-star-fill text-warning "></i>
                  <i className="bi bi-star-fill text-warning "></i>
                  </label>
               </div>
               {/*<!-- form check -->*/}
               <div className="form-check mb-2">
                  {/*<!-- input -->*/}
                  <input className="form-check-input" type="checkbox" value="" id="ratingFour" checked/>
                  <label className="form-check-label" for="ratingFour">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning "></i>
                  <i className="bi bi-star-fill text-warning "></i>
                  <i className="bi bi-star-fill text-warning "></i>
                  <i className="bi bi-star text-warning"></i>
                  </label>
               </div>
               {/*<!-- form check -->*/}
               <div className="form-check mb-2">
                  {/*<!-- input -->*/}
                  <input className="form-check-input" type="checkbox" value="" id="ratingThree"/>
                  <label className="form-check-label" for="ratingThree">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning "></i>
                  <i className="bi bi-star-fill text-warning "></i>
                  <i className="bi bi-star text-warning"></i>
                  <i className="bi bi-star text-warning"></i>
                  </label>
               </div>
               {/*<!-- form check -->*/}
               <div className="form-check mb-2">
                  {/*<!-- input -->*/}
                  <input className="form-check-input" type="checkbox" value="" id="ratingTwo"/>
                  <label className="form-check-label" for="ratingTwo">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star text-warning"></i>
                  <i className="bi bi-star text-warning"></i>
                  <i className="bi bi-star text-warning"></i>
                  </label>
               </div>
               {/*<!-- form check -->*/}
               <div className="form-check mb-2">
                  {/*<!-- input -->*/}
                  <input className="form-check-input" type="checkbox" value="" id="ratingOne"/>
                  <label className="form-check-label" for="ratingOne">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star text-warning"></i>
                  <i className="bi bi-star text-warning"></i>
                  <i className="bi bi-star text-warning"></i>
                  <i className="bi bi-star text-warning"></i>
                  </label>
               </div>
            </div>
         </div>
    )
}

export default Rating;