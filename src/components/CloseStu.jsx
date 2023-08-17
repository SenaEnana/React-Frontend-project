const CloseStu = ({closeStudy}) => {
  return (
    <div>
             <div className='container rounded p-0'>
            <h3 className="text-lighter p-2 m-0 bg-info fw-lighter">Additional Infos <button
                    className="btn m-0 p-0 btn-sm float-end close-btn" id="closeBtn" onClick={() => closeStudy(false)}>
                    <i className="fa fa-close fs-5 m-0 p-0"></i>
                </button></h3>
        </div>
    </div>
  )
}

export default CloseStu
