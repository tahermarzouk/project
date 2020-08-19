import React from 'react';

const MovieList = (props) => {
    return ( <div  >
        {props.list.map((e,id)=> 
        
        <div key={id} class="card">
            <h1>{e.Title}</h1>
           <img  src={e.Image} width="350px" height="300px" />
        <div class="card-body">
        <p style={{width:"300px"}} class="card-text" >{e.Descr}  </p>
        <span><img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Star%2A.svg/1117px-Star%2A.svg.png" style={{width:"30px", height:"30px"}}  /> <b>{e.Rating}</b> </span>
        </div>
        </div>
        )}
    </div> );
}
 
export default MovieList;