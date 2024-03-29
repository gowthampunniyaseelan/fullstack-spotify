import {useEffect,useState} from 'react';
import { accessToken,logout,getCurrentUserProfile, getTopTracks } from './spotify';
import { catchErrors } from './utils';
import { GlobalStyle } from './styles';
import { Login,Profile,TopArtists,TopTracks,Playlists,Playlist } from './pages';
import styled from "styled-components/macro";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

const StyledLogoutButton = styled.button`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(0,0,0,.7);
  color: var(--white);
  font-size: var(--fz-sm);
  font-weight: 700;
  border-radius: var(--border-radius-pill);
  z-index: 10;
  @media (min-width: 768px) {
    right: var(--spacing-lg);
  }
`;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  const [token,setToken] = useState(null);
  const [profile, setprofile] = useState(null);


  useEffect(() => {
    setToken(accessToken);
    const fetchdata = async ()=>{
      const {data} = await getCurrentUserProfile();
      catchErrors(setprofile(data));
    }
    fetchdata();
  },[])
  return (
    <div className="App">
    <GlobalStyle/> 
    <header className="App-header">
       {!token ?(
       <Login/>
       ) : (
         <>
           <StyledLogoutButton onClick={logout}>Logout</StyledLogoutButton>
        
        <Router>
        <ScrollToTop/>
            <Routes>
              <Route path="/top-artists" element={<TopArtists/>}/>        
              <Route path="/top-tracks" element={<TopTracks/>}/>
              <Route path="/playlists/:id" element={<Playlist/>}/>        
              <Route path="/playlists" element={<Playlists/>}/>
              <Route path="/" element={<Profile/>}/>
                
                
                </Routes>
          </Router>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
