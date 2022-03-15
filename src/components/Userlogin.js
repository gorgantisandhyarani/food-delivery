import {useForm,} from 'react-hook-form'
import { useSelector} from 'react-redux'

function Userlogin(){

let {register, handleSubmit,formState: { errors } } = useForm()



const onFormSubmit=(userLoginObj)=>{
    console.log(userLoginObj)
    
}



return(
    <div className='row'>
    <p className='display-1 text-center text-info'>Login</p>
    <div className='col-12 col-sm-10 col-md-6 mx-auto'>
        
        <form className='form-style p-4' onSubmit={ handleSubmit(onFormSubmit)}>
         <div className='mb-3'>
             
         <label htmlFor='username'>username </label>
             <input type="text"{...register("username",{required:true})}
              id='username'className='form-control'/>
             {
                errors.username ?.type==='required'&&<p className='text-danger fw-bold'>*name is required</p>
             }
             </div>
             <div>
             <label htmlFor='username'>password</label>
             <input type="text"{...register("password",{required:true})}
              id='password'className='form-control'/>
             {
                errors.password ?.type==='required'&&<p className='text-danger fw-bold'>*password is required</p>
             }
             </div>
             <button type='submit' className=' btn btn-success d-block mx-auto mt-4'>Login
            <i className='fas fa-user-plus'></i></button>
            

        </form>

    </div>
    </div>
)
}
export default Userlogin