import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

export const Protected = (props) => {
    const {token} = useAuth(); 
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(()=> {
        if(!token) {
            navigate('/login');
        }
    })
  return (
    <Component />
  )
}
