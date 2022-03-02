import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class F2 extends Component {
    
    
      state = { username: '',
      password: '',
      items:[]
         

    }
    
    
    onChange = e => {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value })

    }

    onSubmit = e => {
        e.preventDefault();
        console.log("state",this.state);
        const items=[...this.state.items];

        items.push({
            username:this.state.username,
            password:this.state.password
        })

        localStorage.setItem('item', JSON.stringify(items));

        console.log('boom',items);
        this.setState({ items, username: '', password: '' })
    }

    render() {
        const { username, password,items} = this.state;

        return (
            <div>
                <h1> user name :{username} </h1>
                <form onSubmit={this.onsubmit}>
                    <input type='text'
                        value={username}
                        onChange={this.onChange}
                        name='username' />
                        <h1> password:{password} </h1>
                    <input type='text'
                        value={password}
                        onChange={this.onChange}
                        name='password' />
                        <br/>
                        <br/>
                        

                    <button type='submit'onClick={this.onSubmit} > <Link to='/F12'>Submit</Link> </button>
                        
                </form>
               
            </div>
        )
    }
}

export default F2
