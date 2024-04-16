import './Profile.css';
import profileImg from '../../assets/profile.jpg';
export default function Profile() {
  return (
    <div className='profile'>
      <div className='info'>
        <img src={profileImg} alt='' />
        <div className='account'>
          <h5>Reza MK</h5>
          <p>Example@gmail.com</p>
        </div>
      </div>
        <i className='ri-arrow-down-s-line'></i>
    </div>
  );
}
