import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from '../../store/auth';
import { toast } from 'react-toastify';

export const Add_Candidates = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {token } = useAuth();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('party', data.party);
      formData.append('idCardNumber', data.idCardNumber);
      formData.append('age', data.age);
      formData.append('candidatePic', data.candidatePic[0]); // Assuming 'candidatePic' is the name of the file input
      formData.append('partyPic', data.partyPic[0]); // Assuming 'partyPic' is the name of the file input
      formData.append('constituency', data.constituency);

      const response = await axios.post('https://powerballot.onrender.com/api/candidate/newCandidate', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status) {
        toast.success(`${data.name}, Register Successfully`);
      }
    } catch (error) {
      toast.error(`Error Registering ${data.name} Reason ${error.response.data.message}`)
      
    }
  };

  return (
    <>
      <section className='add-candidate'></section>
      <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div className="card">
              <h5 className="text-center mb-4">Register Candidate</h5>
              <form className="form-card" onSubmit={handleSubmit(onSubmit)}>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">Candidate Name<span className="text-danger"> *</span></label>
                    <input {...register('name', { required: true })} className="candidate-input" type="text" placeholder="Enter Candidate Name" />
                    {errors.name && <span className="text-danger">Candidate name is required</span>}
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">Candidate Party<span className="text-danger"> *</span></label>
                    <input {...register('party', { required: true })} className="candidate-input" type="text" placeholder="Enter Candidate Party Name" />
                    {errors.party && <span className="text-danger">Candidate party name is required</span>}
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">Candidate ID Card Number<span className="text-danger"> *</span></label>
                    <input {...register('idCardNumber', { required: true })} className="candidate-input" type="text" placeholder="Enter Candidate ID Card Number" />
                    {errors.idCardNumber && <span className="text-danger">Candidate id card number is required</span>}
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">Candidate Age<span className="text-danger"> *</span></label>
                    <input {...register('age', { required: true })} className="candidate-input" type="text" placeholder="Enter Candidate Age" />
                    {errors.age && <span className="text-danger">Candidate age is required</span>}
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">Candidate Picture<span className="text-danger"> *</span></label>
                    <input {...register('candidatePic', { required: true })} className="candidate-input" type="file" />
                    {errors.candidatePic && <span className="text-danger">Candidate picture is required</span>}
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">Party Picture<span className="text-danger"> *</span></label>
                    <input {...register('partyPic', { required: true })} className="candidate-input" type="file" />
                    {errors.partyPic && <span className="text-danger">Candidate party picture is required</span>}
                  </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">Candidate Constituency<span className="text-danger"> *</span></label>
                    <input {...register('constituency', { required: true })} className="candidate-input" type="text" placeholder="Enter Candidate Constituency" />
                    {errors.constituency && <span className="text-danger">Candidate constituency is required</span>}
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="form-group col-sm-6">
                    <button type="submit" className="btn btn-primary">Register Candidate</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
