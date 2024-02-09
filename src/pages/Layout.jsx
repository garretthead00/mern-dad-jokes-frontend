import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Seamless.AI Prep</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jokes">Jokes</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;