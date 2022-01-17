import { Link } from 'react-router-dom';
import '../styles/Login.css';

export default function Register() {
  return (
    <div className="container-main">
      <div className="container-card">
        <div className="card-register">
          <div className="card-register-info">
            <h1>Welcome Back!</h1>
            <p>
              To keep conected with us please login with your personal info
            </p>
            <Link to="/login" className="btn-register">Sign-in</Link>
          </div>
        </div>

        <div className="container-login">
          
          <form className="login-form">
            <h1 className="name-logo-login">MyTask2Do</h1>
            <div className="login-form-title">
            <h1>Create Account</h1>
            {/* <span>It's great to see you again!</span> */}
            </div>

            <div className="login-form-input">
              <div className="wrap-input">
                <input type="text" autoComplete="false" placeholder="Name" />
              </div>

              <div className="wrap-input">
                <input type="email" autoComplete="false" placeholder="Email" />
              </div>

              <div className="wrap-input">
                <input type="password" autoComplete="false" placeholder="Password"/>
              </div>

              <div className="wrap-input">
                <input type="password" autoComplete="false" placeholder="Confirm password" />
              </div>
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn">Create</button>
            </div>

            <div className="text-footer">
              <span className="txt1-footer">Already have an account?</span>
              <Link to="/login" className="txt2-footer">Sign-in</Link>
            </div>

            <div className="credits">
              <span>Design credits</span>
              <a href="https://www.youtube.com/channel/UCEkMd3Bw_bVUuGbXU0sFPSg">Guilherme Chinaglia</a>
            </div>
          </form>
        </div>     
      </div>
    </div>
  );
}