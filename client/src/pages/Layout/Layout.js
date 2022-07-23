import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../components/Nav/index';
import Home from '../../pages/Home'
import SearchPhotos from '../../searchPhotos'
import { Link } from 'react-router-dom';


function Layout() {
    return (
        <>

    
        <div className="App">
          <section>
            <div>
              <h1 className="banner"><Link to="/" className="inspo-header">Inspo.Co</Link></h1>
            </div>
  
            {/* <div>
                <Home />
            </div> */}
            <div>
                <Outlet />
            </div>
          </section>
  
          {/* <div className="container">
            <SearchPhotos />
          </div> */}
        </div>
      </>
    );
};

export default Layout;