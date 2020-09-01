import React from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

function Image(props) {

    return (
        <React.Fragment>
          <img alt={props.name} src={require(`../../images/${props.image}`)} />
        </React.Fragment>
    )
}

export default Image
