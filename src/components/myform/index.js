import React, { useState } from 'react';
import "./myform.css"

const MyForm = ({ formData, setFormData, inputs,handleSubmit,heading }) => {

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (
        <form onSubmit={handleSubmit} className="my-form">
            <label style={{fontSize:"20px",textAlign:"center",fontWeight:"bold"}}>{heading}</label>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                {inputs.map((item, index) => (
                    <div className="form-group" key={index}>
                        <label htmlFor={item}>{item}</label>
                        <input
                            type="text"
                            id={item}
                            name={item}
                            value={formData.item}
                            onChange={handleInputChange}
                            
                        />
                    </div>
                ))}

                {/* <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div> */}
            </div>
            <div className="form-group">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default MyForm;
