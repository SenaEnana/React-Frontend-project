const Input = ({value,type,placeHolder,className, onChange,onClick,onSubmit}) => {

  return (
    <div className='container p-2 container-lg float-center rounded'>
          <div className="p-2 info">
            <form action="/login" method="post" onSubmit={onSubmit}>
                      <input type={type} value={value} className={className}
                          placeholder={placeHolder} required onChange={onChange} onClick={onClick}/>
                 
                  </form>
                  </div>
     </div>
  )
}
export default Input

// php artisan config:cache