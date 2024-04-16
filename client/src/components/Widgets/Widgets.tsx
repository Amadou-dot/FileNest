// import NewUpload from '../Small/Buttons/NewUpload/NewUpload';
import Disk from './Disk/Disk';
import Premium from './Premium/Premium';
import './Widgets.css';

export default function Widgets() {
  return (
    <div className='widgets'>
      <Disk />
      <div className='bottom'>
        <button>
          <i className='ri-add-line'></i>New Upload
        </button>
        <Premium />
      </div>
    </div>
  );
}
