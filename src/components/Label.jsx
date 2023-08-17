import React from 'react'

const Label = ({type,className,title}) => {
  return (
   
        <div className='container container-lg bg-lighter rounded'>
            <form action="">
                            <label type={type} className={className}>{title}</label>
                          
</form>
</div>
  )
}

export default Label
