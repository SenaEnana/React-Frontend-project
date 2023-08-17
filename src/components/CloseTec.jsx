const CloseTec = ({closeTeach}) => {
  return (
    <div>
      <div className='container rounded p-0'>
            <h4 className="text-lighter p-2 m-0 bg-info fw-lighter">Additional Infos <button
                    className="btn m-0 p-1 btn-sm float-end close-btn" id="close" onClick={() => closeTeach(false)}>
                    <i className="fa fa-close fc-light fs-6"></i>
                </button></h4>
</div>
    </div>
  )
}

export default CloseTec
