import React from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

function Image(props) {

    return (
        <React.Fragment>
          {
            props.image != undefined ? <img src={require(`../../../images/${props.image}`)} alt={props.name}/> : <img src={require('../../../images/loading.gif')} alt='Loading'/>
          }
        </React.Fragment>
    )
}

export default Image
