import React from 'react';
import styles from './Profile.module.css';
import movieposter from './img/Poster.jpg'

function Profile() {
  const userData = {
    name: "이현종",
    email: "guswhd284@email.daelim.ac.kr",
    password: "********",
    profileImage: "https://avatars.githubusercontent.com/u/62270266?v=4?s=100", // 프로필 이미지 주소
    tel: "010-3625-4289",
    blog: "https://velog.io/@yongho1221",
  };
  return (
    <div className={styles.profile}>
      <div className={styles.profileHeader}>
        <div className={styles.profileImage}>
          <img src={userData.profileImage} alt="프로필 이미지" />
        </div>
        <div className={styles.profileInfo}>
          <h2>{userData.name} 님</h2>
          <ul>
            <li>이메일: {userData.email}</li>
            <li>연락처: {userData.tel}</li>
          </ul>
        </div>
      </div>
      <div className={styles.profileEdit}>
        <button>
          프로필 정보 편집
        </button>
      </div>
    </div>
  );
}

export default Profile;