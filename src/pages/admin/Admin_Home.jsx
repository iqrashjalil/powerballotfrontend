import React from 'react'
import { useAuth } from '../../store/auth'

export const Admin_Home = () => {

    const { allUser } = useAuth();
    

  return (
    <>
    
    <section className='container'>
        <h1>User Records:</h1>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Phone</th>
      <th scope="col">ID Card</th>
      <th scope="col">Constituency</th>
    </tr>
  </thead>
  <tbody>
    {allUser && allUser.map((user, index) => (
      <tr key={index}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.age}</td>
        <td>{user.phone}</td>
        <td>{user.idCardNumber}</td>
        <td><span className="badge text-bg-primary">{user.constituency}</span></td>
      </tr>
    ))}
  </tbody>
</table>

    </section>
    
    </>
  )
}
