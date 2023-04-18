import { Link } from 'react-router-dom';
import Profile from './profile';
import './userprofile.css'

function UserProfile(){
    const userData = {
        name: "이현종",
      };
return (
      <div className="userprofile">
        <nav className="profile-navbar">
          <div className="profile-nav-logo">
            <h1>{userData.name}님의 페이지 입니다.</h1>
          </div>
          <div className="profile-nav-links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Profile />
      </div>
  );
}

export default UserProfile;