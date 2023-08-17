const Select = ({title,value,name}) => {
  return (
    <div>
        <div className='container container-lg bg-lighter rounded'>
              <div className="p-1 m-0 info">
                    <label className="float-start fs-5 text-dark fw-bold" type="education">Education</label>
                    <select className="fs-6 p-1 bg-white form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option className="fs-5" value="graduated">Graduated</option>
                    <option className="fs-5" value="msc">Msc</option>
                        <option className="fs-5" value="bsc">Bsc</option>
                        <option className="fs-5" value="learning">Still Learning</option>
                    </select>
                </div>
                </div>
    </div>
  )
}

export default Select
// BS
// MS
// Graduated
// Still Learning