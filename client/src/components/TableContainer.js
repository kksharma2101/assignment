import React, { useEffect, useState } from "react";
import "./style/Table.css";
import axios from "axios";
import toast from "react-hot-toast";
// import { useParams } from "react-router-dom";

const TableContainer = () => {
  // const params = useParams();
  const [data, setAllData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [id, setId] = useState("");
  const [active, setActive] = useState(false);

  // console.log(name);

  const updatePopUp = (newId) => {
    setActive(!active);
    if (!active) {
      setId(newId);
    } else {
      setId("");
    }
  };
  // get single data
  // const getSingleData = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `${process.env.REACT_APP_API_URL}api/v1/single-data/${id}`
  //     );
  //     if (data.success) {
  //       setId(data._id);
  //       setName(data.data.name);
  //       setEmail(data.data.email);
  //       setPhone(data.data.phone);
  //       setHobbies(data.data.hobbies);
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // useEffect(() => {
  //   getSingleData();
  // }, [id]);

  // get all data
  const getAllData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}api/v1/get-data`
      );
      if (data) {
        setAllData(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllData();
  }, []);

  // handle update data
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_URL}api/v1/update-data/${id}`,
        { name, email, phone, hobbies }
      );
      if (data?.success) {
        toast.success(data?.message);
        window.location.reload();
      } else {
        toast.error("Error in product created");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // handleDelete
  const handleDelete = async (newId) => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API_URL}api/v1/delete-data/${newId}`
      );
      if (data.success) {
        toast.success(data.message);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <div className={active ? "tableContainer" : ""}>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Hobbies</th>
              <th scope="col">Email</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item._id}>
                <th scope="row">{index + 1}</th>
                {/* <input type="radio" /> */}
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.hobbies}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    className="bg bg-primary"
                    onClick={() => updatePopUp(item._id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="bg bg-danger"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={!active ? "container" : ""}>
        <form onSubmit={handleUpdate}>
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default TableContainer;
