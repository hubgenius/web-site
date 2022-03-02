import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom'

const Form = () => {
  const { id } = useParams();
  const [Name, setName] = useState()
  const [Email, setEmail] = useState('')
  const [PhoneNumber, setPhoneNumber] = useState('')
  const [Place, setPlace] = useState('')

  useEffect(() => {
    getuser()
    post()
    // updatebackenddat()
  }, [])

  function getuser() {
    axios.get(`http://localhost:9003/schema/${id}`).then((result) => {
      console.log("result.data", result.data)
      setName(result.data.data.Name)
      setEmail(result.data.data.Email)
      setPhoneNumber(result.data.data.PhoneNumber)
      setPlace(result.data.data.Place)

    })
  }
  function updatebackenddat() {
    let item = {
      Name: Name,
      Email: Email,
      PhoneNumber: PhoneNumber,
      Place: Place
    }
    console.log(item)
    axios.put(`http://localhost:9003/schema/${id}`, item).then((res) => {
      console.log("updare", res)
    })
  }
  function post() {
    let item = {
      Name: Name,
      Email: Email,
      PhoneNumber: PhoneNumber,
      Place: Place
    }
    console.log(item)
    axios.post(`http://localhost:9003`, item).then((res) => {
      console.log("u...", res)
    })

  }
  const [NameErr, setNameErr] = useState({});

  const [allEntry, setAllEntry] = useState([])
  const submitForm = (e) => {
    e.preventDefault();
    const isValid = formValidation()

    const newEntry = { Name, Email, PhoneNumber, Place }

    if (isValid) {
      setAllEntry([...allEntry, newEntry])
      setName('');
      setEmail('')
      setPhoneNumber('')
      setPlace('')
    }

  }

  const formValidation = () => {
    const NameErr = {};
    let isValid = true;

    if (Name.trim().length < 5) {
      NameErr.Name = "Frist Name is Not Valid"
      isValid = false;
    }

    setNameErr(NameErr)
    return isValid

  }

  return (

    <div>
      data: {id}
      <p class="oo" ><span>Information Form</span></p>

      <form class="MM" onSubmit={submitForm}>

        <div class="bb">
          <label htmlfor='Name'> FullName:</label>
          <input required type='text' name='Name' value={Name} onChange={(e) => setName(e.target.value)}></input>
          <br />
          {Object.keys(NameErr).map((key) => {
            return <div style={{ color: 'red' }}>{NameErr[key]}</div>
          })}
        </div>


        <br />
        <div class='A'>
          <lable htmlFor='Email'> Email:  </lable>
          <input required type='text' name='Email' autoComplete='off'
            value={Email} onChange={(e) => setEmail(e.target.value)} />
          <br />
        </div>
        <br />


        <div class='B'>
          <label htmlFor="PhoneNumber" name=" PhoneNumber">phonenumber:</label>
          <input type='number' name='PhoneNumber' value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>


        <br />
        <br />
        <label htmlFor='Place' name='Place'>Place:</label>
        <input type='text' value={Place} onChange={(e) => setPlace(e.target.value)} />
        <br />
        <br />
        
        <Button type='button' class='btn btn-success'>
          <button type='submit' onClick={post}>Submit</button>
        </Button>

      </form>
      <br />
      <div class='AS'>
        <div className='showDataStyles'>
          <div style={{ display: allEntry.length === 0 ? 'none' : 'block' }}>
            <table class="table-danger" style={{ margin: 'auto', width: '50%', border: '2px solid red' }}  >
              <tr style={{ border: '2px solid red ' }} >
                <th>Name</th>
                <th>Email </th>
                <th>Phonenumber</th>
                <th>place</th>
              </tr>
              {
                allEntry.map((curElem) => {
                  return (
                    <tr>
                      <td>
                        <p>{curElem.Name}</p>
                      </td>
                      <td>
                        <p>   {curElem.Email}  </p>
                      </td>
                      <td>
                        <p> {curElem.Phonenumber} </p>
                      </td>
                      <td>
                        <p> {curElem.Place} </p>
                      </td>
                    </tr>
                  )
                })
              }
            </table>
          </div>
        </div>
      </div>

    </div>
  )


}


export default Form;