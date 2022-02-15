import MaterialTable from 'material-table';
import React from 'react'
// import MaterialTable from 'material-table'

 const Home =()=> {

    const data = [
        { Name: "aman", Age: 25, Place: "india" },
        { Name: "rahul", Age: 25, Place: "canada" },
        { Name: "rahul", Age: 25, Place: "canada" },
        { Name: "krunal", Age: 25, Place: "london" }
    ]


    const columns=[
        {
            title:"Name" ,field:"Name"
        },
        {
            title:"Age"  ,field:"Age"
        },
        {
            title:"Place",field:"Place"
        }
    ]
    return (
        <div>
                <MaterialTable  title=" Material Table"
                data={data}
                columns={columns}
               
                    />


                
                
                
                
                
            





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

