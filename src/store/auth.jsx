import  axios  from "axios";
import { createContext, useContext, useEffect, useState } from "react";



export const AuthContext = createContext();


export const AuthProvider = ({children})=> {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState();
    const [candidate, setCandidate] = useState();
    const [totalVotes, setTotalVotes] = useState([]);
    const [constituencyCandidate, setConstituencyCandidate] = useState([]);
    const [allUser, setAllUser] = useState([]);
    
    const storeToken = (serverToken)=> {
        setToken(serverToken);
        return localStorage.setItem("token",serverToken);
    }

    const isLoggedIn = !!token;

    const logoutUser = ()=> {
        setToken(null);
        localStorage.removeItem("token");
    };

    // Inside AuthProvider component

    const fetchPartiesWithPics = async () => {
        try {
            const response = await axios.get('https://powerballot.onrender.com/api/candidate/getAllParties', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data.partiesWithPics;
        } catch (error) {
            console.error('Error fetching parties with pics:', error);
            throw error; // Propagate the error back to the caller
        }
    };


    
     

useEffect(() => {
    const fetchUser = async () => {
        try {
            const response = await axios.get("https://powerballot.onrender.com/api/auth/profile", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
            if (response.status === 200) {
                const data = response.data;
                setUser(data.userData);
            } else {
                setUser(null); // Clear user data if not authenticated
            }
        } catch (error) {
            console.log("Error Fetching The User", error)
        }
    };

    const alluser = async () => {
        try {
            const response = await axios.get("https://powerballot.onrender.com/api/auth/alluser", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
            if (response.status === 200) {
                const data = response.data;
                setAllUser(data.User);
            } else {
                setAllUser(null); 
            }
        } catch (error) {
            console.log("Error Fetching The All User", error)
        }
    };

    const fetchCandidateData = async () => {
        try {
            const response = await axios.get("https://powerballot.onrender.com/api/candidate/getAllCandidates", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
            if (response.status === 200) {
                const data = response.data;
                setCandidate(data.Candidates);
            } else {
                setUser(null); // Clear user data if not authenticated
            }
        } catch (error) {
            console.log("Error Fetching Candidates Data", error)
        }
    };

    
    

 
    // Fetch user data only if logged in
    if (isLoggedIn) {
        fetchUser();
        fetchCandidateData();
        alluser();
    } else {
        setUser(null);
        setCandidate(null);
        
    }
}, [isLoggedIn, token, ]);




    useEffect(()=> {
        const fetchCandidatesWithConsituency = async () => {
            try {
                const constituency = user && user.constituency;
                
                
                const response = await axios.get(`https://powerballot.onrender.com/api/candidate/getCandidatesWithConstituency/${constituency}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
        
                if (response.status === 200) {
                    const data = response.data;
                    setConstituencyCandidate(data);
                } else {
                    console.error("Failed to fetch candidates data:", response.statusText);
                }
            } catch (error) {
                console.error("Error fetching candidates data:", error);
            }
        };

        const totalVotes = async () => {
            try {
                const constituency = user && user.constituency;
                const response = await axios.get(`https://powerballot.onrender.com/api/vote/totalvotes/${constituency}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })

                if(response.status === 200){
                    const data = response.data;
                    // console.log("Total Votes Data:",data);
                    setTotalVotes(data);
                }
            } catch (error) {
                console.error("Total votes Error:", error);
            }
        }

       
        
        fetchCandidatesWithConsituency();
        totalVotes();
    },[user])









    return (
        <AuthContext.Provider value={{storeToken, isLoggedIn, logoutUser, user, candidate, fetchPartiesWithPics, token, setUser, totalVotes, constituencyCandidate, allUser}}>

        {children}

        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return authContextValue;
}