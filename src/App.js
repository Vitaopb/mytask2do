import './style.css';

function App() {
  return (
    <div className="container-main">
      <div className="container-card">
        <div className="card-register">
          <div className="card-register-info">
            <h1>Register Now!</h1>
            <p>
              Don't wait, run and come register on <span className="name-logo">MyTask2Do</span>. We are waiting for you!
            </p>
            <button className="btn-register">Register</button>
          </div>
        </div>

        <div className="container-login">
          
          <form className="login-form">
            <h1 className="name-logo-login">MyTask2Do</h1>
            <div className="login-form-title">
            <h1>Welcome Back!</h1>
            <span>It's great to see you again!</span>
            </div>

            <div className="login-form-input">
              <div className="wrap-input">
                <input type="email" autoComplete="false" placeholder="Email" />
              </div>

              <div className="wrap-input">
                <input type="password" autoComplete="false" placeholder="Password"/>
              </div>
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-footer">
              <span className="txt1-footer">Dont't have an account?</span>
              <a href="#" className="txt2-footer">Create now.</a>
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

export default App;