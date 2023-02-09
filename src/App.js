import {BsSearch} from 'react-icons/bs'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {FiMessageSquare} from 'react-icons/fi'
import HeaderTabs from './components/HeaderTabs';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div>
         <h1> D Community</h1>
        </div>
      </div>
      <div className='right-side-content'>
        <div className="profilebar">
            <div className="input-container">
              <input type="search" placeholder="Search" className="input-el"/>
              <BsSearch size ={13} />
            </div>
            <div className='profile-section'>
              <IoMdNotificationsOutline size={20} className="icon"/>
              <FiMessageSquare size={20} className="icon"/>
                <img src='https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg' alt="profile-pic" className="profile-pic"/>
            </div>
        </div>
        <HeaderTabs/>
      </div>
      
    </div>
  );
}

export default App;
