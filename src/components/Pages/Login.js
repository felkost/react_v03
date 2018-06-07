import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { callAPI_Login } from '../../actions/Auth/auth';
import { connect } from 'react-redux';
import { createLogger }  from 'redux-logger';
import thunkMiddleware  from 'redux-thunk'
import { createStore, applyMiddleware} from 'redux';
import authReducer from '../../reducers/Auth/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const logger = createLogger()

const store = createStore(
    authReducer,
    applyMiddleware(
      thunkMiddleware, 
      logger 
    )
  )

class Login extends Component {
    
    render() {
        return (
            <div className="block-center mt-4 wd-xl">
                <ToastContainer/>
                <div className="card card-flat">
                    <div className="card-header text-center bg-dark">
                        <a href="">
                            <img className="block-center rounded" src="img/logo.png" alt="Logo"/>
                        </a>
                    </div>
                    <div className="card-body">
                        <p className="text-center py-2">SIGN IN TO CONTINUE.</p>
                        <form className="mb-3" id="loginForm" noValidate>
                            <div className="form-group">
                                <div className="input-group with-focus">
                                    <input className="form-control border-right-0" id="loginInputEmail" type="email" placeholder="Enter email" required/>
                                    <div className="input-group-append">
                                        <span className="input-group-text fa fa-envelope text-muted bg-transparent border-left-0"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group with-focus">
                                    <input className="form-control border-right-0" id="loginInputPswd" type="password" placeholder="Password" required/>
                                    <div className="input-group-append">
                                        <span className="input-group-text fa fa-lock text-muted bg-transparent border-left-0"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix">
                                <div className="checkbox c-checkbox float-left mt-0">
                                    <label>
                                        <input type="checkbox" value="" name="remember"/>
                                        <span className="fa fa-check"></span>Remember Me</label>
                                </div>
                                <div className="float-right">
                                    <Link to="recover" className="text-muted">Forgot your password?</Link>
                                </div>
                            </div>
                            <button  className="btn btn-block btn-primary mt-3" 
                                onClick={() => store.dispatch(callAPI_Login(
                                    document.getElementById('loginInputEmail').value,
                                    document.getElementById('loginInputPswd').value))}
                                type="button">Login</button>
                        </form>
                        <p className="pt-3 text-center">Need to Signup?</p>
                        <Link to="register" className="btn btn-block btn-secondary">Register Now</Link>
                    </div>
                </div>
                <div className="p-3 text-center">
                    <span className="mr-2">&copy;</span>
                    <span>2018</span>
                    <span className="mx-2">-</span>
                    <span>Heedbook</span>
                    <br/>
                    {/*<span>Bootstrap Admin Template</span>*/}
                </div>
            </div>
        );
    }
}

export default connect()(Login);
