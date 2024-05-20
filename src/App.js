import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  );
}

const Header = () => {
  return(
    <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
    <Link to="dashboard">Dashboard</Link>
    <Link to="settings">Settings</Link>
  </nav>
  )
}
function About() {
  return <h2>About</h2>;
}

function Dashboard() {
  return <h3>Dashboard</h3>;
}

function Settings() {
  return <h3>Settings</h3>;
}

function Error() {
  return <h3>Error Page</h3>;
}

function Layout() {
  return (
    <div>
      <Header/>
      <hr />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path='*' element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
