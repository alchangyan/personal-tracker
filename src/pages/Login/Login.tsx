import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

import { loginViaGoogle } from "@/api/user";

import styles from "./Login.module.scss";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className={styles.login}>
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          const idToken = credentialResponse.credential;

          if (idToken) {
            const response = await loginViaGoogle(idToken);

            localStorage.setItem("token", response.token);
            localStorage.setItem("userId", response.userId);

            navigate("/");
          }
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}

export default Login;
