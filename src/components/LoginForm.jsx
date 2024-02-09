import { useEffect, useState } from "react";

export const LoginForm = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {}, []);

  const login = (event) => {
    event.preventDefault()
    if (!email || !password) {
      setError(true);
    }
    props.login({email, password})
  };

  return (
    <div>
      {error && <p>Missing required fields</p>}
      <form onSubmit={login}>
        <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" value={email}/>
        <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" value={password}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
