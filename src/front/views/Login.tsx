import Navbar from "../components/Navbar";

export const Login = () => {
  return (
    <div>
      <Navbar />

      <div id="form-ui">
        <form action="" method="post" id="form-login">
          <div id="form-body">
            <div id="welcome-lines">
              <div id="welcome-line-1">INICIAR SESION</div>
            </div>
            <div id="input-area">
              <div className="form-inp">
                <input placeholder="Email Address" type="text" />
              </div>
              <div className="form-inp">
                <input placeholder="Password" type="password" />
              </div>
            </div>
            <div id="submit-button-cvr">
              <button id="submit-button" type="submit">
                Login
              </button>
            </div>
            <div id="forgot-pass">
              <a href="#">Forgot password?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
