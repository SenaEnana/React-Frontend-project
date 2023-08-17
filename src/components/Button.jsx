
const Button = ({title,className,onClick}) => {
  return (
    <div>
      <button className={className} onClick={onClick}>{title}</button> 
      {/* <button className="btn btn-lg bg-info fs-6 p-1 m-1 float-end">Login</button>  */}
      {/* <button type={type} value={value} className="btn btn-lg bg-warning fs-6 p-1 m-1 float-end">{title}</button> */}
    </div>
  )
}
// 
export default Button
