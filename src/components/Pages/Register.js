import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authReducer from '../../reducers/Auth/auth';
import { callAPI_Register } from '../../actions/Auth/auth';
import { connect } from 'react-redux';
import { createLogger }  from 'redux-logger';
import thunkMiddleware  from 'redux-thunk'
import { createStore, applyMiddleware} from 'redux';

const logger = createLogger()

const store = createStore(
    authReducer,
    applyMiddleware(
      thunkMiddleware, 
      logger 
    )
  )

// TODO: check password retype

class Register extends Component {

    render() {
        return (
            <div className="block-center mt-4 wd-xl">
                {/* START card */}
                <div className="card card-flat">
                    <div className="card-header text-center bg-dark">
                        <a href="">
                            <img className="block-center" src="img/logo.png" alt="Logo"/>
                        </a>
                    </div>
                    <div className="card-body">
                        <p className="text-center py-2">SIGNUP TO GET INSTANT ACCESS.</p>
                        <form className="mb-3" id="registerForm" noValidate>
                            <div className="form-group">
                                <label className="text-muted" htmlFor="signupInputEmail1">Email address</label>
                                <div className="input-group with-focus">
                                    <input className="form-control border-right-0" id="registerInputEmail" type="email" placeholder="Enter email" autoComplete="off" required/>
                                    <div className="input-group-append">
                                        <span className="input-group-text fa fa-envelope text-muted bg-transparent border-left-0"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="text-muted" htmlFor="signupInputEmail1">Full name</label>
                                <div className="input-group with-focus">
                                    <input className="form-control border-right-0" id="registerInputFullname" type="email" placeholder="Enter yout full name" autoComplete="off" required/>
                                    <div className="input-group-append">
                                        <span className="input-group-text fa fa-envelope text-muted bg-transparent border-left-0"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="text-muted" htmlFor="signupInputPassword1">Password</label>
                                <div className="input-group with-focus">
                                    <input className="form-control border-right-0" id="registerInputPswd" type="password" placeholder="Password" autoComplete="off" required/>
                                    <div className="input-group-append">
                                        <span className="input-group-text fa fa-lock text-muted bg-transparent border-left-0"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="text-muted" htmlFor="signupInputRePassword1">Retype Password</label>
                                <div className="input-group with-focus">
                                    <input className="form-control border-right-0" id="registerInputPswdRetype" type="password" placeholder="Retype Password" autoComplete="off" required data-parsley-equalto="#signupInputPassword1"/>
                                    <div className="input-group-append">
                                        <span className="input-group-text fa fa-lock text-muted bg-transparent border-left-0"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="checkbox c-checkbox mt-0">
                                <label>
                                    <input type="checkbox" value="" required name="agreed"/>
                                    <span className="fa fa-check"></span>I agree with the
                                    <a className="ml-1" href="">terms</a>
                                </label>
                            </div>
                            <button className="btn btn-block btn-primary mt-3" type="button"
                                onClick = {() => store.dispatch(callAPI_Register(
                                    document.getElementById('registerInputEmail').value,
                                    document.getElementById('registerInputPswd').value,
                                    document.getElementById('registerInputFullname').value))} >Create account</button>
                        </form>
                        <p className="pt-3 text-center">Have an account?</p>
                        <Link to="login" className="btn btn-block btn-secondary">Signup</Link>
                    </div>
                </div>
                {/* END card */}
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

export default connect()(Register);
