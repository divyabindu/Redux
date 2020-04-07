import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:""
        }
    }
    componentDidMount(){
       this.login();
    }

    handleChange=(e)=>{
        let {name, value} = e.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        // document.getElementById("emailError").innerHTML = "";
        // document.getElementById("passwordError").innerHTML = "";
        let {email,password} = this.state;
            document.getElementById("emailError").innerHTML = email ? "" : "Email can't be empty";
            document.getElementById("passwordError").innerHTML = password ? "" : "Password can't be empty";
            if(email && password){
                let isValid = this.validateEmail(email)
                if(isValid){
                    if(email === this.props.token.username && password === this.props.token.password){
                        window.location = 'employee-list';
                    }else{
                        e.preventDefault();
                        alert("Invalid Credentials");
                    }
                }else{
                    e.preventDefault();
                    document.getElementById("emailError").innerHTML = "Invalid Email address";
                }
            }else{

            }
    }

    validateEmail = (email) => {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(email)) {
            return true;
          }
          else
            {return false;}
    }

    login=()=>{
        let credentials = {username : "hruday@gmail.com", password: "hruday123"}
        let user = [
                {id:1, name:"test1", age : "11", gender:"male", email : "test1@gmail.com", phoneNo : "9415346313" },
                {id:2, name:"test2", age : "12", gender:"male", email : "test2@gmail.com", phoneNo : "9415346314" },
                {id:3, name:"test3", age : "13", gender:"male", email : "test3@gmail.com", phoneNo : "9415346315" },
                {id:4, name:"test4", age : "14", gender:"male", email : "test4@gmail.com", phoneNo : "9415346316" },
                {id:5, name:"test5", age : "15", gender:"male", email : "test5@gmail.com", phoneNo : "9415346317" },
                {id:6, name:"test6", age : "16", gender:"male", email : "test6@gmail.com", phoneNo : "9415346318" } 
                ] 
                this.props.dispatch({type: "CREDENTIALS", payload:credentials })
                this.props.dispatch({type: "DATA", payload:user })
    }
    
    render() {
        return (
            <div>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Username</label>
                                    <input type="email" name="email" value={this.state.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
                                    <span id="emailError"></span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" name="password" value={this.state.password}className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange}/>
                                    <span id="passwordError"></span>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        token: state.credentials.token,
        data: state.credentials.data
    }
}


export default connect(mapStateToProps)(Login)

