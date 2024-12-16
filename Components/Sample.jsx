import { Button, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';


function Sample() {
  // value for store
  const [amount,setAmount]=useState('')
  const [rate,setRate]=useState('')
  const [year,setYear]=useState('')
  const [interest,setInterest] =useState('')
  // inavlid or valid
  const[isinavalidprinciple,setisinavalidprinciple]=useState(false)
  const[isinavalidprincipleRate,setisinavalidprincipleRate]=useState(false)
  const[isinavalidprincipleYear,setisinavalidprincipleYear]=useState(false)

  const validRegex=/^[0-9].?[0-9]+$/
  


  console.log(amount,rate,year);
  

const validinput=(e)=>{
  // console.log(e);
  const {name,value}=e.target 
  if(name=='Amount_pri'){
    setAmount(value)
  }
  else if(name =="Rate_pri"){
    setRate(value)
  }
  else{
    setYear(value)
  }
  if(validRegex.test(value) || value=="")
    {
      if(name=='Amount_pri'){
        setisinavalidprinciple(false)
      }
      else if(name=='Rate_pri'){
        setisinvalidRate(false)
      }
      else{
        setisinvalidYear(false)
      }
    }
    else{
      if(name=='Amount_pri'){
        setisinavalidprinciple(true)
      }
      else if(name=='Rate_pri'){
        setisinvalidRate(true)
      }
      else{
        setisinvalidYear(true)
      }
    }
}
const handleCalculte=(e)=>{
  e.preventDefault()
  console.log("calculate simple interest");
  if(amount && rate && year){
     setInterest((amount *rate*year)/100)
  }
  else{
    alert("please enter the field complety")
  }
}
const clear=()=>{
  setAmount('')
  setRate('')
  setYear('')
  isinavalidprinciple('false')
  isinavalidprincipleRate('false')
  isinavalidprincipleYear('false')
}


  return (

    <>
    <div className=' min-vh-100 w-100% d-flex justify-content-center   ' style={{backgroundColor:'black'}}>
        <div className= 'text-color text-dark bg-light rounded p-5 mt-5' style={{width:'750px',height:'650px'}}>
          
        <h1>Simple Interest Calculator</h1>
        <p>Calculate your simple interest easily</p>
        <div className='text-light bg-dark rounded d-flex justify-content-center flex-column align-items-center' style={{height:'150px'}}>
            <h1 style={{fontSize:'40px'}}>₹{interest}</h1>
            <h1 style={{fontSize:'30px'}}>Total simple interest</h1>


        </div>
        <div className='mt-5'>
        <TextField value={amount || ""} onChange={validinput} fullWidth label="Amount" id="Amount" name='Amount_pri' />
        { isinavalidprinciple &&(
        <div className='text-danger fw-bold'>Invalid principle Amount</div>)}

        <TextField value={rate || ""} onChange={validinput} className='mt-3' fullWidth label="Rate" id="Rate" name='Rate_pri' /> 
        { isinavalidprincipleRate &&
        <div className='text-danger fw-bold'>Invalid principle Rate</div>}
        <TextField onChange={validinput}  value={year || ""} className='mt-3' fullWidth label="Year" id="Year" name='Year_pri' />
        { isinavalidprincipleYear &&
        <div className='text-danger fw-bold'>Invalid principle Year</div>
        }
        </div>
        <div className='mt-3 d-flex justify-content-center flex-column align-items-center'>
        <Stack direction="row" spacing={2}>
        <Button onClick={handleCalculte} className='bg-dark text-white'>Calculate</Button>
        <Button onClick={clear} className='bg-primary text-white'>Reset</Button>
        </Stack>
        </div>

        </div>
        
    </div>
    </>
  )
}

export default Sample