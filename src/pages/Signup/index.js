import React, { useState } from 'react'
import { Link } from 'react-router-dom';

//import css
import "./SignUp.css";

const SignUp = () => {
  const [user, setUser] = useState({
    "name": "",
    "phone": "",
    "email": "",
    "username": "",
    "password": ""
  })
  const formHandle = (e) => {
    e.preventDefault()
    fetch('https://fakestoreapi.com/users',
      {
        method: "POST",
        mode: 'no-cors',
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(error => console.log(error))
  }
  return (
    <div>
      <div className="content ">
        <div className="container form-reg bg-white">
          <div className="row">
            <div className="col-md-6 order-md-2" id="image-fluid" >
            </div>
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="mb-4">
                    <h3>Sign In to <strong>Foody</strong></h3>
                    <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                  </div>
                  <form action="#" onSubmit={formHandle}>
                    <div className="form-group last mb-4">
                      <input type="text" className="form-control" id="name" placeholder="Name"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group last mb-4">
                      <input type="email" className="form-control" id="email" placeholder="Email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group last mb-4">
                      <input type="text" className="form-control" id="phone-number" placeholder="Phone Number"
                        value={user.phone}
                        onChange={(e) => setUser({ ...user, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group mb-4">
                      <input type="text" className="form-control" id="username" placeholder="Username"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                      />
                    </div>
                    <div className="form-group last mb-4">
                      <input type="password" className="form-control" id="password" placeholder="Password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                      />
                    </div>
                    <div className="form-group last mb-4">
                      <input type="password" className="form-control" id="password" placeholder="Repet Password" />
                    </div>
                    <div className="d-flex mb-5 align-items-center">
                      <label className="control control--checkbox mb-0">
                        <span className="caption">Remember me</span>
                        <input type="checkbox" checked="checked" />
                        <div className="control__indicator"></div>
                      </label>
                      <span className="ml-auto">
                        <Link href="#" className="forgot-pass">Forgot Password</Link>
                      </span>
                    </div>
                    <input type="submit" value="Sign Up" className="btn text-white btn-block btn-primary" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;