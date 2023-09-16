import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextValue } from '../App';

function Second() {
    const { Theme } = useContext(ContextValue)

    return (
        <div className={Theme === false? 'container-light': 'container-dark'}>
            <div className='row row-light'>
                <div className='col col-light'>First</div>
                <div className='col col-light'>Second</div>
                <div className='col col-light'>Third</div>
            </div><br/>
            <Link to='/'>First page</Link>
        </div>
    );
}

export default Second;
