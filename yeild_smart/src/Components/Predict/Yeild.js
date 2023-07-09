import React, { useEffect, useState } from "react"
import inputs from "./input";
import axios from "axios";
import Predict from "./Predict";
import swal from "sweetalert";
import './yield.css'
import { useNavigate } from "react-router-dom";
import Navbar2 from "../Navbar/Navbar2";

const Yeild = () => {
    const [error, seterror] = useState("");
    const [loading, setLoading] = useState();
    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
      };
      let userData = sessionStorage.getItem("userData")
      const navigate = useNavigate();
      useEffect(()=>{
        if(!userData){
          navigate('/login')

        }
      },[])
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
        if(values.nitrogen === '')
        { seterror("*Nitrogen is Required!");}
        else if(values.phosphorus === '')
        { seterror("*Phosphorus is Required!");}
        else if(values.potassium === '')
        { seterror("*Potassium is Required!");}
        else if(values.temperature === '')
        { seterror("*Temperature is Required!");}
        else if(values.humidity === '')
        { seterror("*Humidity is Required!");}
        else if(values.ph === '')
        { seterror("*Ph is Required!");}
        else if(values.rainfall === '')
        { seterror("*Rainfall is Required!");}
        else
    {
      const { data } = await axios.post(`https://yeildsmart.onrender.com/predictCrop`, { nitrogen: Number(values.nitrogen), phosphorus: Number(values.phosphorus), potassium: Number(values.potassium), temperature: Number(values.temperature), humidity: Number(values.humidity), ph: Number(values.ph), rainfall: Number(values.rainfall) })
      setLoading(false)
      seterror("");
      values.nitrogen='';values.phosphorus='';values.potassium='';values.temperature='';values.humidity='';values.ph='';values.rainfall='';
      swal("Success", `You should plant ${data.result} in your field`, "success");
    }     
  }
	return (
    <>
    <Navbar2/>
	  <div className="body">
		<form onSubmit={handleSubmit}>
		  <h1 className='title'>Crop Recomendation</h1>
		  {error && (<p style={{color:"red"}}>{error}</p>)}
		  {inputs.map((input) => (
			<Predict key={input.id} {...input} value={values[input.name]} onChange={onChange}
			/>
		  ))}
		  <button onClick={handleSubmit} className='btn'>{loading ? 'Evaluating...' : 'Recommend Crop'}</button>
		</form>
	  </div></>)
  }

  export default Yeild;