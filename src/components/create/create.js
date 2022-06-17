import React from "react";
import {Form, Button} from 'semantic-ui-react';
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Create() {
   
   let history = useHistory();
 
    const [last_name, setLastName] = useState('');
    const [first_name, setFirstName] = useState('');
    const [is_active, setIs_active] = useState('');
    const [date_of_birth, setDate_of_birth] = useState('');

   const sendDataToAPI =() => {
      axios.post(`http://localhost:3000/api/employee`, {
          last_name,
          first_name,
          is_active,
          date_of_birth,
   }).then (() => {
       history.push('/read')
   })
   }
    return(
        <div>
            <Form>
                
                <Form.Field >
                    <label>Last Name</label>
                    <input name="Lname"
                     onChange= {(e) =>  setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>First Name</label>
                    <input name="Fname"
                      onChange= {(e) =>  setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Is Active</label>
                    <input name="active"
                      onChange= {(e) =>  setIs_active(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Date of Birth</label>
                    <input name="dob"
                      onChange= {(e) =>  setDate_of_birth(e.target.value)} />
                </Form.Field>
    
                <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
            </Form>
        </div>
    )
}