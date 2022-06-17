import React from "react";
import { Button,Table  } from "semantic-ui-react";
import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

export default function Read(){

    const [apIData,setApIData]= useState ([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/api/employee`)
        .then((getData) => {
           setApIData(getData.data);
        })
    },[])

    const setData = (id,last_name,first_name,is_active,date_of_birth) => {
        localStorage.setItem('ID',id);
        localStorage.setItem('Last Name',last_name);
        localStorage.setItem('First Name',first_name);
        localStorage.setItem('Is_active',is_active);
        localStorage.setItem('D.O.B.',date_of_birth);
        }

    const getData = () => {
        axios.get (`http://localhost:3000/api/employee`)
        .then ((getData) => {
             setApIData(getData.data);
        })
    }

    const onDelete = (id) => {
        axios.delete (`http://localhost:3000/api/employee/${id}`)
        .then(() => {
            getData();
        })
    }


    return(
        <div>
            <Table >
                <Table.Header>
                    <Table.Row >
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>LAST NAME</Table.HeaderCell>
                    <Table.HeaderCell>FIRST NAME</Table.HeaderCell>
                    <Table.HeaderCell>IS ACTIVE</Table.HeaderCell>
                    <Table.HeaderCell>DATE OF BIRTH</Table.HeaderCell>
                    <Table.HeaderCell>UPDATE</Table.HeaderCell>
                    <Table.HeaderCell>DELETE</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            </Table>
            <tbody>
                {apIData.map((data)=>{
                    return(
                        <Table.Row>
                           <Table.Cell>{data.id}</Table.Cell>
                           <Table.Cell>{data.last_name}</Table.Cell>
                           <Table.Cell>{data.first_name}</Table.Cell>
                           <Table.Cell>{data.is_active}</Table.Cell>
                           <Table.Cell>{data.date_of_birth}</Table.Cell>
                           <Table.Cell>
                               <Link to='update'>
                                   <Button onClick={() => setData(data.id,data.last_name,data.first_name,data.is_active,data.date_of_birth)}>
                                    Update!
                                </Button>
                               </Link>
                           </Table.Cell>
                           <Table.Cell>
                               <Button onClick={ () =>  onDelete(data.id)}> 
                               Delete!
                               </Button>
                           </Table.Cell>
                        </Table.Row>
                    )
                })}
            </tbody>

        </div>
    )
}