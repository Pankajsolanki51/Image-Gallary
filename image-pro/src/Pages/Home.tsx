
import Navbar from '../components/Navbar'
import UploadForm from '../components/UploadForm'
import ImageGallary from '../components/ImageGallary'

function Home() {
  return (
    <div className='max-w-4xl mx-auto'>
        <Navbar/>
        <UploadForm/>
        <ImageGallary/>
    </div>
  )
}

export default Home