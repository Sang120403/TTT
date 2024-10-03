// import { BrowserRouter as Routes, Route, Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Sửa đổi ở đây

import 'bootstrap/dist/css/bootstrap.min.css';
import { publicRoutes } from './routes';
import Layout from './components/layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={
              <Layout>
                 <Page />
              </Layout>
            } />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
