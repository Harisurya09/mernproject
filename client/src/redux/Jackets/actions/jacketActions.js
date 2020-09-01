import {Jackets_Type_Fetch, Jackets_Type_Success, Jackets_Type_Failure}  from './jacketType';
import axios from 'axios'

const jackets_Type_Fetch = () => {
    return {
        type: Jackets_Type_Fetch
    }
}

const jackets_Type_Success = (jackets) => {
    return {
        type: Jackets_Type_Success,
        payload: jackets
    }
}

const jackets_Type_Failure = (error) => {
    return {
        type: Jackets_Type_Failure,
        payload: error
    }
}

export const jackets_fetch = () => {
    return (dispatch) => {
        dispatch(jackets_Type_Fetch())
        axios.get('/prod/riding-jacket')
        .then(res => {
            const products = res.data
            dispatch(jackets_Type_Success(products))
            // console.log('received data ', products)
        }).catch(err =>{
            const error = err;
            dispatch(jackets_Type_Failure(error))
            // console.log('received error ', error)
        })
    }
}


export default jackets_fetch