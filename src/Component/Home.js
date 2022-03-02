import MaterialTable from 'material-table';
import React, { useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

 function Home() {


    let history = useHistory();

    const [user, setuser] = useState([])
    axios.get(`http://localhost:9003`)
        .then(res => {
            const tableData = res.data.data;
            setuser(tableData)

        })
    function deleteuser(_id) {
        console.log(_id);
        axios.delete(`http://localhost:9003/schema/${_id}`, {}).then((result) => {
            console.log("result.data", result);

        })

    }
    function updateuser(_id) {
        console.log(_id);
        history.push(`${_id}`);
        
    }

    const columns = [
        {
            title: "_id", field: "_id"
        },
        {
            title: "Name", field: "Name", editable: true
        },
        {
            title: "Age", field: "Age", editable: true
        },
        {
            title: "Place", field: "Place", editable: true
        },
        {
            title: "Email", field: "Email", editable: true
        },
        {
            title: "PhoneNumber", field: "PhoneNumber", editable: true
        },

        {
            title: "Gender", field: "Gender", editable: true
        }

    ]



    return (

        <div>

            <MaterialTable title=" Material Table"
                data={user}
                columns={columns}

                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Edit User',
                        editable: "rowData",
                        onClick: (event, rowData) => updateuser(rowData._id),

                    },

                    {
                        icon: 'delete',
                        tooltip: 'Delete User',
                        onClick: (event, rowData) => deleteuser(rowData._id)

                    }
                ]}
            />
         
            <button><Link to='/7686875678'>submit</Link></button>

        </div>
    )
}




export default Home























/* <div class='h1'>

<h1> Table Information </h1>
</div>

<div class='A'>
    <button onClick={data}> Table</button>

</div>
<div class='B' >
<table>
    <tr >
        <th> Name</th>
        <th> Age</th>
        <th> Place</th>
    </tr>
</table>
{
    data.map((val,key)=>{
        return(
            <div class='B'>
        <tr key={key}>
            <th>{val.name}</th>
            <th>{val.age}</th>
            <th>{val.place}</th>
        </tr>
        </div>
   )})
}
 
</div> */

