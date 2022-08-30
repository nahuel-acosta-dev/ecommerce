import React from 'react';

const Store = () =>{

    return(
        <div className="mb-8">
        <h5 className="mb-3">Stores</h5>
        <div className="my-4">
           {/*<!-- input -->*/}
           <input type="search" className="form-control" placeholder="Search by store"/>
        </div>
        {/*<!-- form check -->*/}
        <div className="form-check mb-2">
           {/*<!-- input -->*/}
           <input className="form-check-input" type="checkbox" value="" id="eGrocery" checked/>
           <label className="form-check-label" for="eGrocery">
           E-Grocery
           </label>
        </div>
        {/*<!-- form check -->*/}
        <div className="form-check mb-2">
           {/*<!-- input -->*/}
           <input className="form-check-input" type="checkbox" value="" id="DealShare"/>
           <label className="form-check-label" for="DealShare">
           DealShare
           </label>
        </div>
        {/*<!-- form check -->*/}
        <div className="form-check mb-2">
           {/*<!-- input -->*/}
           <input className="form-check-input" type="checkbox" value="" id="Dmart"/>
           <label className="form-check-label" for="Dmart">
           DMart
           </label>
        </div>
        {/*<!-- form check -->*/}
        <div className="form-check mb-2">
           {/*<!-- input -->*/}
           <input className="form-check-input" type="checkbox" value="" id="Blinkit"/>
           <label className="form-check-label" for="Blinkit">
           Blinkit
           </label>
        </div>
        {/*<!-- form check -->*/}
        <div className="form-check mb-2">
           {/*<!-- input -->*/}
           <input className="form-check-input" type="checkbox" value="" id="BigBasket"/>
           <label className="form-check-label" for="BigBasket">
           BigBasket
           </label>
        </div>
        {/*<!-- form check -->*/}
        <div className="form-check mb-2">
           {/*<!-- input -->*/}
           <input className="form-check-input" type="checkbox" value="" id="StoreFront"/>
           <label className="form-check-label" for="StoreFront">
           StoreFront
           </label>
        </div>
        {/*<!-- form check -->*/}
        <div className="form-check mb-2">
           {/*<!-- input -->*/}
           <input className="form-check-input" type="checkbox" value="" id="Spencers"/>
           <label className="form-check-label" for="Spencers">
           Spencers
           </label>
        </div>
        {/*<!-- form check -->*/}
        <div className="form-check mb-2">
           {/*<!-- input -->*/}
           <input className="form-check-input" type="checkbox" value="" id="onlineGrocery"/>
           <label className="form-check-label" for="onlineGrocery">
           Online Grocery
           </label>
        </div>
     </div>
    )
}

export default Store;