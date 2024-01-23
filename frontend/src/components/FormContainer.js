import React, { useState } from "react";
import "./style/Form.css";
import axios from "axios";
import { toast } from "react-hot-toast";

const FormContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hobbies, setHobbies] = useState("");

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}api/v1/add`,
        {
          name,
          email,
          phone,
          hobbies,
        }
      );
      if (res && res.data.success) {
        console.log(res);
        toast.success(res.data.message);
        window.location.reload();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <br />
          <input
            type="text"
            className="form-control"
            value={name}
            id="exampleInputEmail1"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <br />
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputNumber" className="form-label">
            Phone Number
          </label>
          <br />
          <input
            type="numbar"
            className="form-control"
            id="exampleInputEmail1"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputHobbies" className="form-label">
            Hobbies
          </label>
          <br />
          <input
            type="text"
            className="form-control"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default FormContainer;
