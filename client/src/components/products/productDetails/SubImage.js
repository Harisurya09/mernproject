import React from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

function SubImage(props) {

    return (
        <React.Fragment>
          <img src={require(`../../../images/${props.image}`)} alt={props.name}/>
        </React.Fragment>
    )
}

export default SubImage
