import React from 'react'
import { Link } from 'react-router-dom';
const Login = (props) => (
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
                  <h3>Login In to <strong>Foody</strong></h3>
                  <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                </div>
                <form action="#" method="post">
                  <div className="form-group first">
                    <label for="username">Username</label>
                    <input type="text" className="form-control" id="username" />
                  </div>
                  <div className="form-group last mb-4">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" />
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
                  <input type="submit" value="Log In" className="btn text-white btn-block btn-primary" />
                  <span className="d-block text-left my-4 text-muted"> or sign in with</span>
                  <div className="social-login">
                    <Link href="#" className="facebook">
                      <span className=" fa fa-facebook mr-3" aria-hidden="true"></span>
                    </Link>
                    <Link href="#" className="twitter">
                      <span className="icon-twitter mr-3"></span>
                    </Link>
                    <Link href="#" className="google">
                      <span className="icon-google mr-3"></span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;