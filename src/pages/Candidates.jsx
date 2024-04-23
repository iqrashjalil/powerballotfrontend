import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';

export const Candidates = () => {
    
    const { candidate, fetchPartiesWithPics } = useAuth();
    
    const [partiesWithPics, setPartiesWithPics] = useState([]);

    useEffect(() => {
        const fetchParties = async () => {
            try {
                const parties = await fetchPartiesWithPics(); // Call the fetchPartiesWithPics method with the token
                setPartiesWithPics(parties);
                
            } catch (error) {
                console.error('Error fetching parties with pics:', error);
            }
        };
        fetchParties();
    }, []);
    


    return (
        <section className='candidate-container mh flex'>
            <div className='left'>
                <div className='left-heading'><h4>Political Parties</h4></div>
                {partiesWithPics.map(party => (
                    <div key={candidate.id} className='party-card  flex aic border'>
                        <div className='party-logo border '><img src={`https://powerballot.onrender.com${party.partyPic}`} alt="" /></div>
                        <p>{party.party}</p>
                    </div>
                ))}
            </div>
            <div className='right border'>
                <div className='right-heading'><h3>Candidates List:</h3></div>
                
                <div className='flex pot flexWrap'>
                {candidate && candidate.map(candidate => (
                <div className='candidate-card' key={candidate.id}>
    <div className="candidate-details">
        <img src={`https://powerballot.onrender.com${candidate.candidatePic}`} alt="" />
        {console.log(candidate.candidatePic)}
        <div className="info">
            <p>{candidate.party}</p>
            <h5>{candidate.name}</h5>
           
        </div>
        
    </div>
    <hr />
    <div className='description'>
        <p>This is a full stack developer candidate in lahore which includes best packages for you as well and best benefits as well and what is the full candidate etc waghera waghera</p>
    </div>
</div>
))}
      </div>      </div>
        </section>
    );
};
