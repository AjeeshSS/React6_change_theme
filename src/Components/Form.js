import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextValue } from '../App';


function Form() {
    const { Theme } = useContext(ContextValue)

    return (
        <div className={Theme === false? 'container-light': 'container-dark'}>
            <div className='container mt-5 d-flex justify-content-center align-items-center'>
                <form className='form-light'>
                    <div className='form-group'>
                        <label htmlFor="exampleInputEmail">Email address</label>
                        <input type="email" className='form-control' id='exampleInputEmail' aria-describedby='emailHelp' placeholder='Enter email' />
                    </div><br />
                    <div className='form-group'>
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className='form-control' id='exampleInputPassword1' placeholder='Password' />
                    </div><br />
                    <button className='btn-light' type='submit'>
                        Submit
                    </button>
                </form>
            </div>
            <Link to='second'>Next page</Link>
        </div>
    );
}

export default Form;
