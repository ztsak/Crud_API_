import React from "react";
import {Form, Button} from 'semantic-ui-react';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Update() {
   let history = useHistory();
    const [id, setID] = useState('');
    const [last_name, setLastName] = useState('');
    const [first_name, setFirstName] = useState('');
    const [is_active, setIs_active] = useState('');
    const [date_of_birth, setDate_of_birth] = useState('');

    const sendDataToAPI =() => {
      axios.put(`http://localhost:3000/api/employee/${id}`, {
          
          last_name,
          first_name,
          is_active,
          date_of_birth,
    }).then(()=> {
        history.push('/read')
   })
   }
   useEffect (() => {
        setID(localStorage.getItem('ID'));
        setLastName(localStorage.getItem('last_name'));
        setFirstName(localStorage.getItem('first_name'));
        setIs_active(localStorage.getItem('is_active'));
        setDate_of_birth(localStorage.getItem('date_of_birth'));

   },[])

    return(
        <div>
            <Form>
                
              
                <Form.Field>
                    <label>Last Name</label>
                    <input name="Lname"
                    value={last_name}
                     onChange= {(e) =>  setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>First Name</label>
                    <input name="Fname"
                      value={first_name}
                      onChange= {(e) =>  setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Is Active</label>
                    <input name="active"
                      value={is_active}
                      onChange= {(e) =>  setIs_active(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Date of Birth</label>
                    <input name="dob"
                      value={date_of_birth}
                      onChange= {(e) =>  setDate_of_birth(e.target.value)} />
                </Form.Field>
    
                <Button type='submit' onClick={sendDataToAPI}>Update!</Button>
            </Form>
        </div>
    )
}