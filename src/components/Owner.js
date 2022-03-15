import React from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from'axios'
function Owner(){
    let {register, handleSubmit,formState: { errors } } = useForm()
    let navigate=useNavigate()
    const onFormSubmit= async(newUser)=>{
        let response= await axios.post('http://localhost:4000/user/createuser',newUser)
        let data=response.data
        if (data.message=="success"){
          navigate("/ownerlogin")
        }
        else{
          alert("somethpng went toin owner creation")
        }
    }
    return(
    
          <div className='row '>
            
            <p className='display-1 text-center text-danger'>Owner Register</p>
            <div className='col-12 col-sm-10 col-md-6 mx-auto'>
            <form className='form-style p-4' onSubmit={handleSubmit(onFormSubmit)}>
                <diV className='mb-3'>
            <label htmlFor='username'>username</label>
            <input type="text"{...register("username",{required:true})}
              id='username'className='form-control'/>
             {
                errors.username ?.type==='required'&&<p className='text-danger fw-bold'>*name is required</p>
             }
            </diV>
            <div className='mb-3'>
            <label htmlFor='email'>email</label>
            <input type='email'{...register("email",{required:true})} id='email' className='form-control'/>
             {
                 errors.email ?.type === 'required' && <p className='text-danger fw-bold'>*mail is required</p>
             }
            </div>
            <diV className='mb-3'>
            <label htmlFor='phone'>phone no</label>
            <input type='number' {...register("phone",{required:true})}
             id='phone' className='form-control'/>
            {
                errors.phone ?.type === 'required' && <p className='text-danger fw-bold'>*number is required</p>
             }
            </diV>
            <div className='mb-3'>
            <label htmlFor='password'>password</label>
            <input type='password'{...register("password",{required:true})}
              id='password' className='form-control'/>
            {
                errors.password ?.type === 'required'&& <p className='text-danger fw-bold'>*password is required</p>
             }
             </div>
             <div className='mb-3'>
            <label htmlFor='dob'>date of birth</label>
            <input type='date'{...register("dob",{required:true})}
              id='dob' className='form-control'/>
            {
                errors.password ?.type === 'required'&& <p className='text-danger fw-bold'>*date of birth is required</p>
             }
             </div>
            <button type='submit' className=' btn btn-success d-block mx-auto mt-4'>registation
            <i className='fas fa-user-plus'></i></button>
            

            </form>
          </div>  
        </div>
    )
}
export default Owner