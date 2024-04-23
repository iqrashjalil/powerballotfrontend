import React from 'react';
import { useAuth } from '../store/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
export const Cast_Vote = () => {
  const { constituencyCandidate, token, user, setUser, isLoggedIn } = useAuth();

  const handleSubmit = async (candidateId) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      const response = await axios.post(`https://powerballot.onrender.com/api/vote/newVote/${candidateId}`, null, config);
     
      // Handle the API response here
      if(response.status){
        console.log('API Response:', response.data.message);
        toast.success(response.data.message);
      }
      setUser(prevUser => ({ ...prevUser, isVoted: true }));
      toast.error(error.response.data.message);
    } catch (error) {
      console.error('API Error:', error.response.data.message);
      toast.error(error.response.data.message);
      // Handle errors here
    }
  };

  return (
    
    <section>
      {isLoggedIn && user && user.isVoted === true &&<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Thank you for voting!</h4>
  <p>Your vote has been successfully cast. We appreciate your participation in the voting process.</p>
  <hr/>
  <p class="mb-0">If you have any further questions or concerns, feel free to reach out to <a href="https://www.ecp.gov.pk/" target="_blank" rel="noopener noreferrer">Election Commission Of Pakistan </a></p>
</div>
}
      <h1>Candidates</h1>
      <div className='flex flexWrap'>
        {constituencyCandidate.Candidates && constituencyCandidate.Candidates.length > 0 ? (
          constituencyCandidate.Candidates.map(candidate => (
            <div className='candidate-card' key={candidate._id}>
              <div className="candidate-details">
                <img src={`https://powerballot.onrender.com${candidate.candidatePic}`} alt="" />
                <div className="info">
                  <p>{candidate.party}</p>
                  <h5>{candidate.name}</h5>
                  <button disabled={user.isVoted} onClick={() => handleSubmit(candidate._id)}  className='btn btn-primary'>Vote</button>
                </div>
              </div>
              <hr />
              <div className='description'>
                <p>Vote Sensibly</p>
              </div>
            </div>
          ))
        ) : (
          <p>No candidates available</p>
        )}
      </div>
    </section>
  );
};
