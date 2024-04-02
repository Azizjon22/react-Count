import React, { useState } from 'react';

function Hooks(props) {

    const [count,setCount] = useState(0);
    const incerement = () => {
        setCount(count+1);
    };

    const decrement = () => {
        setCount(count-1)
    }
    return (
        <>
            

            <div className='container'>
                <div className='row'>
                    <div className='col-4 offset-4 mt-3'>
                        <div className='card'>
                            <div className='card-header'>
                                <h3 className='text-center'>
                                    Conter
                                </h3>
                            </div>
                            <div className='card-body'>
                                <h4 className='text-center'>{count}</h4>
                            </div>

                            <div className='card-footer d-flex justify-content-between'>
                                <button className='btn btn-success' onClick={incerement}>+ </button>
                                <button className='btn btn-danger' onClick={decrement}>-</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hooks;