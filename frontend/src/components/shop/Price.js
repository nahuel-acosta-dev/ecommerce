import React from 'react';

const Price = () => {

    return(
        <div class="mb-8">
            {/*<!-- price -->*/}
            <h5 class="mb-3">Price</h5>
            <div>
            {/*<!-- range -->*/}
            <div id="priceRange" class="mb-3"></div>
            <small class="text-muted">Price:</small> <span id="priceRange-value" class="small"></span>
            </div>
        </div>
    )
}

export default Price;