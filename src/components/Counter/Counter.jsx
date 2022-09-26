import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from '../../Actions';
import './Counter.css';


const Counter = () => {
    const counterState = useSelector((state) => state.changeNumber);
    const dispatch = useDispatch();

    return (
        <div className='card w-25 mx-auto p-2 mt-5'>
            <div className="card-header text-center h4">
                Counter
            </div>
            <div className="card-body">
                <h1 className='text-center'>
                    {counterState}
                </h1>
            </div>
            <div className="card-footer btn-container">
                <button className='btn btn-dark'
                onClick={() => dispatch(decNumber())}
                >
                    Decrement
                </button>
                <button className='btn btn-secondary'
                    onClick={() => dispatch(incNumber())}
                >Increment</button>
            </div>
        </div>
    )
}

export default Counter