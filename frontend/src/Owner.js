import React, { useEffect } from 'react'
import axios from 'axios'

function Owner() {

    useEffect(()=>{
        axios.get('http://localhost:3306/')
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }, [])

    return (
        <div className = 'd-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className = 'w-50 bg-white rounded'>
                <button className='btn btn-success'>Add +</button>
                <table className = 'table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default Owner