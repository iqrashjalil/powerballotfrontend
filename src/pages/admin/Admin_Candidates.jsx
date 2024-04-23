import React from 'react'
import { useAuth } from '../../store/auth'

export const Admin_Candidates = () => {
  const {candidate} = useAuth();
  return (
    <>
    
    <section className='container'>
        <h1>User Records:</h1>
        <table className="table table-striped">
  <thead>
    <tr>
      <th>Photo</th>
      <th scope="col">Name</th>
      <th scope="col">Party</th>
      <th scope="col">Age</th>  
      <th scope="col">ID Card</th>
      <th scope="col">Constituency</th>
      
    </tr>
  </thead>
  <tbody>
    {candidate && candidate.map((candidate, index) => (
      <tr key={index}>
        <td className='candidate-table-img'><img src={`https://powerballot.onrender.com${candidate.candidatePic}`} alt="" /></td>
        <td>{candidate.name}</td>
        <td>{candidate.party}</td>
        <td>{candidate.age}</td>
        <td>{candidate.idCardNumber}</td>
        <td><span className="badge text-bg-primary">{candidate.constituency}</span></td>
      </tr>
    ))}
  </tbody>
</table>

    </section>
    </>
  )
}
