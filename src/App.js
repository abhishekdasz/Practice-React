import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import Counter from './Components/Counter';
import Parent from './Parent';
import Child from './Child';

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  };

  return (
    <div>
      <h2> Welcome to the HomePage </h2>
      <p> Description of Homepage </p>

      <h1> Components of Homepage </h1>
      <Counter/>
      <button onClick={goToAbout}>Go to About</button>

      <Parent/>
    </div>
  );
}

const Header = () => {
  return(
    <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
    <Link to="contacts">Contacts</Link>
  </nav>
  )
}
function About() {
  return (
    <>
      <h2>About</h2>
      <Child/>
    </>
  )
  ;
}

function Contacts() {
  return <h3>Contacts Page</h3>;
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
          <Route path="contacts" element={<Contacts />} />
          <Route path='*' element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
