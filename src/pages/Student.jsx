import Image from '../components/Image';
import Header from '../components/Header'

const Student = () => {
  return (
    <div>
      <Header/>
      <div className='mt-5'>
  <h3 className="fs-4 fw-bold text-dark m-5">The services our website give to students</h3>
<p className="fs-5 mt-5">Our website give easy and simple service without consuming your time.
   This website is both useful for students and parents this means if you are student and you want to study
   or want to have your own teacher but don't know where to get the best teacher that is convenient for you
   both within time and quality you don't have to worry our website can give you what you are looking for 
   you can get the teacher you are looking for in short period of time all you have to do is signing up to our
   website and you can visit whenever you want by log into the website you will save your time by working with us </p>
  <p className="fs-5 mt-5">
If you are parent and you are looking for teacher for your children all you have to do is having an account by
 signing up and you will get what you need you will be thankful for working with us!!
  </p>
  <Image/>
   <p className='fs-4 fw-bold'> Work With Us For Better Future!!!</p>
  <p className='fs-4 text-success'> Thank You For Using Our Website!!!</p>
</div>

    </div>
  )
}

export default Student
