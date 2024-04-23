import React from 'react'
import { useAuth } from '../store/auth'
import ProgressBar from "@ramonak/react-progress-bar";

export const Result = () => {
    const {totalVotes} = useAuth();
    const { constituencyCandidate } = useAuth();

    
    
    
  return (
    <>

    <section className='result-section'>
        <div className="result-left">
            <h1>Results</h1>
            {constituencyCandidate.Candidates && constituencyCandidate.Candidates.length > 0 ? (
          constituencyCandidate.Candidates.map(candidate => (
            <div className="result-card flex aic  p-2" key={candidate._id}>
                <span className='flex jcc'><img src={`https://powerballot.onrender.com${candidate.partyPic}`} alt="" /></span>
                <span className='result-name'> {candidate.name}</span>
                <span ><ProgressBar width='310px' completed={candidate.votesCount}  borderRadius="2px"  height='50px' bgColor="#0BDA51"  customLabel={`${candidate.votesCount} Votes`} maxCompleted={totalVotes.totalVotes} /></span>
                    
            </div>
            
            ))
        ) : (
          <p>No Results Available available</p>
        )}
        <h3>Total Votes Polled:{totalVotes.totalVotes}</h3>
        </div>
        <div className="result-right"></div>
    </section>

    </>
  )
}









// 