import React from "react" ; 
export default function ProductItem (props) {
   const {product} = props  ; 
    return ( 
        
                <div class="card" >
                 <img src={product.image} class="card-img-top" alt="..." />
                   <div class="card-body">
                       <h5 class="card-title">
                       {product.name}
                           </h5>
                           <p class="card-text">
                               Price {product.price} DT
                           </p>
                            <a href={"/products/" + product.id} class="btn btn-primary">Details</a>
                   </div>
                </div>
            
    );
}