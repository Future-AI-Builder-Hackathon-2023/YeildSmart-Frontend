import React, { useEffect, useState } from "react"
import inputs from "./input";
import axios from "axios";
import Predict from "./Predict";
import swal from "sweetalert";
import './yield.css'
import { useNavigate } from "react-router-dom";
import Navbar2 from "../Navbar/Navbar2";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { MetroSpinner } from 'react-spinners-kit'
import Loader from "../../helper/Loader";

const Yeild = () => {
  const [error, seterror] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  let userData = sessionStorage.getItem("userData")
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData) {
      navigate('/login')

    }
  }, [])
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  }
  const handleOnSearch = async () => {
    setLoading(true)
    setResult("")
    const res = await axios.post(`http://3.88.181.187:8080/v1/`, {
      "model": "gpt-4",
      "messages": [{ "role": "user", "content": `${search}` }]
    })
    console.log('res', JSON.stringify(res))
    setResult(res.data.choices[0].message.content)
    setSearch("");
    setLoading(false)
  }
  const [values, setValues] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    if (values.nitrogen === '') { seterror("*Nitrogen is Required!"); }
    if (values.nitrogen === '') {
      seterror("*Nitrogen is Required!");
    } else if (isNaN(values.nitrogen) || values.nitrogen < 0 || values.nitrogen > 1000) {
      seterror("*Invalid Nitrogen (should be between 0 and 1000 ppm)");
    } else if (values.phosphorus === '') {
      seterror("*Phosphorus is Required!");
    } else if (isNaN(values.phosphorus) || values.phosphorus < 0 || values.phosphorus > 1000) {
      seterror("*Invalid Phosphorus (should be between 0 and 1000 ppm)");
    } else if (values.potassium === '') {
      seterror("*Potassium is Required!");
    } else if (isNaN(values.potassium) || values.potassium < 0 || values.potassium > 1000) {
      seterror("*Invalid Potassium (should be between 0 and 1000 ppm)");
    } else if (values.temperature === '') {
      seterror("*Temperature is Required!");
    } else if (isNaN(values.temperature) || values.temperature < -50 || values.temperature > 50) {
      seterror("*Invalid Temperature (should be between -50 and 50 degrees)");
    } else if (values.humidity === '') {
      seterror("*Humidity is Required!");
    } else if (isNaN(values.humidity) || values.humidity < 0 || values.humidity > 100) {
      seterror("*Invalid Humidity (should be between 0 and 100%)");
    } else if (values.ph === '') {
      seterror("*pH is Required!");
    } else if (isNaN(values.ph) || values.ph < 0 || values.ph > 14) {
      seterror("*Invalid pH (should be between 0 and 14)");
    } else if (values.rainfall === '') {
      seterror("*Rainfall is Required!");
    } else if (isNaN(values.rainfall) || values.rainfall < 0 || values.rainfall > 1000) {
      seterror("*Invalid Rainfall (should be between 0 and 1000 mm)");
    }
    else {
      const { data } = await axios.post(`https://yeildsmart.onrender.com/predictCrop`, { nitrogen: Number(values.nitrogen), phosphorus: Number(values.phosphorus), potassium: Number(values.potassium), temperature: Number(values.temperature), humidity: Number(values.humidity), ph: Number(values.ph), rainfall: Number(values.rainfall) })
      setLoading(false)
      seterror("");
      values.nitrogen = ''; values.phosphorus = ''; values.potassium = ''; values.temperature = ''; values.humidity = ''; values.ph = ''; values.rainfall = '';
      swal("Success", `You should plant ${data.result} in your field`, "success");
    }
  }
  return (
    <>
      <Navbar2 />
      <div className="body">
        <div>
          <form onSubmit={handleSubmit}>
            <h1 className='title'>Crop Recomendation</h1>
            {error && (<p style={{ color: "red" }}>{error}</p>)}
            {inputs.map((input) => (
              <Predict key={input.id} {...input} value={values[input.name]} onChange={onChange}
              />
            ))}
            <button onClick={handleSubmit} className='btn'>{loading ? 'Evaluating...' : 'Recommend Crop'}</button>
          </form>
        </div>
        <div style={{ width: "50%", alignSelf: "start" }}>
          <form onSubmit={handleSubmit} style={{ height: "60em", overflow: "scroll" }}>
            <h1 className='title'>Chat with expert</h1>
            <div style={{ display: "flex" }}>
              <textarea name="search" value={search} onChange={handleSearchChange} style={{ width: "40em",fontSize:"15px",borderWidth:"2px",padding:"1em" }} placeholder="Ask Any Question" rows={4} />
              <div >
                <ArrowCircleRightIcon style={{ fontSize: "45px", marginTop: "20px", marginLeft: "10px", cursor: "pointer" }} onClick={handleOnSearch} />
              </div>
            </div>
            <div style={{ marginTop: "1.5em", fontSize: "1.3em" }}>
              {result === "" ? loading ? <Loader /> : null : result}
            </div>
          </form>
        </div>
      </div></>)
}

export default Yeild;