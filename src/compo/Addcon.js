import React, { useState } from "react";
import './Addcon.css';
const Addcon = (props) => {
    const [state, setstate] = useState({name:"", email:""});
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setstate({
          ...state,
          [name]: value,
        });
      };

      const add=(e)=>{
        e.preventDefault();
        if(state.name==="" || state.email===""){
            alert("All fields are mamdetory !");
            return;
        }
        props.addConHandler(state);
        setstate({name:"", email:""});
      }
    return (
        <div className="container">
            <p>Add New Contact</p>
            <form onSubmit={add}>

                <label htmlFor="name">Name</label><br />
                <input type="text" name="name" id="name" placeholder="Name" value={state.name} onChange={handleInputChange}/>

                <br /><br />

                <label htmlFor="name">Email</label>
                <br />
                <input type="email" name="email" id="email" placeholder="Email" value={state.email} onChange={handleInputChange}/>

                <br />

                <button>Add</button>
            </form>

        </div>
    );
};
export default Addcon;