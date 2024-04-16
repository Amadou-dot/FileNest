import './Disk.css'

export default function Disk() {
  return <div className='disk'>
  <div className='progress'>
    <div
      className='progress-bar'
      role='progressbar'
      aria-valuenow={25}
      aria-valuemin={0}
      aria-valuemax={100}></div>
  </div>
  <div className='info'>
    <h5>
      <span>750</span> GB Free<span>/ 1</span>TB
    </h5>{' '}
    available Storage
  </div>
</div>
}
