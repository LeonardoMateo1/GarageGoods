import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {

    const navigate = useNavigate();

    const logOutHandler = (e) => {
        e.preventDefault();
        axios.get('http://localhost:8000/api/user/logout')
            .then((res) => { console.log(res); navigate('/') })
            .catch(err => console.log(err))

    }

  return (
    <div>
        <div>
            <button onClick={logOutHandler}>Logout</button>
        </div>
    </div>
  )
}

export default Logout