import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../store/auth.jsx';
import { toast } from 'react-toastify';
export const Login = () => {
  const url = "https://powerballot.onrender.com/api/auth/login"
  const { storeToken } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data, e) => {
    e.preventDefault(); 
  
    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      
      if (response.status) {
        console.log(response.data.user.name)
        storeToken(response.data.token);
        toast.success(`Welcome, ${response.data.user.name}`);

        if (response.data.user.role === 'admin') {
          navigate('/admin/home');
        } else {
          navigate('/');
        }
      }
      
      
    } catch (error) {
      toast.error(error.response.data.message);
      
    }
  
  }
  return (
    <>
    <section className="" >
  <div className="px-4 py-5 px-md-5 text-center mh text-lg-start flex jcc aic" >
    <div className="container">
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="my-5 display-3 fw-bold ls-tight">
            The best online <br />
            <span className="text-primary">voting system</span>
          </h1>
          <p style={{color: "hsl(217, 10%, 50.8%)"}}>
          Join us in shaping the future of democracy in Pakistan! Our innovative voting system leverages cutting-edge technology to make voting easier, more secure, and more transparent than ever before. With our platform, you can cast your ballot from anywhere, ensuring your voice is heard in every election. Say goodbye to long queues and paper ballots - embrace the convenience of digital voting. Together, let's build a stronger, more inclusive democracy for Pakistan. Login In now and be a part of the change!
          </p>
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card">
            <div className="card-body py-5 px-md-5">
              
            <h1 className='text-primary text-center fw-bold ls-tight display-4'>Login</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
              
                
              
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="number" id="idCardNumber" name='idCardNumber' className="form-control" {...register("idCardNumber", {required: true})} />
                  <label className="form-label" htmlFor="idCardNumber">ID Card Number</label>
                </div>
                
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="password" id="password" name='password' className="form-control" {...register("password", {required: true})} />
                  <label className="form-label" htmlFor="password">Password</label>
                </div>

                

                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4 " style={{width: "100%"}}>
                  Login
                </button>
               
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
