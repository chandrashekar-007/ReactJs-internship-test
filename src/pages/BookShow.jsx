
import React, { useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';

export default function BookShow() {

    const [user, setUser] = useState({
        name:"",email:"",seat:""
    });
    const navigate=useNavigate();
    const handleInput=(e)=>{
        setUser({
            ...user, [e.target.name]:e.target.value
        });
    }
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        if(user){
            localStorage.setItem("name",user.name)
            localStorage.setItem("email",user.email)
            localStorage.setItem("seat",user.seat)
            alert("Thankyou , Your Ticket has been booked successfully")
            navigate("/")

        }
        else{
            alert("Invalid credentials")
        }
    }


  return (
    <div className='centered'>
      <h2>Movie Ticket Booking</h2>
      <form onSubmit={(e)=>handleFormSubmit(e)}>
        {/* Name Input */}
        <div>
          <label htmlFor="name" style={{ textDecoration: "none"}}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete='off'
            value={user.name}
            onChange={handleInput}
            required
          />
        </div>
        {/* Seat Selection */}
        <div>
          <label htmlFor="seat">Select a Seat:</label>
          <input
            type="text"
            id="seat"
            name="seat"
            autoComplete='off'
            value={user.seat}
            onChange={handleInput}
            required
          />
        </div>
        {/* E mail  */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete='off'
            value={user.email}
            onChange={handleInput}
            required
          />
        </div>
        {/* Submit Button */}
        <div>
          <button className='buttons' type="submit">Book Ticket</button>
        </div>
      </form>
    </div>
  );
};


