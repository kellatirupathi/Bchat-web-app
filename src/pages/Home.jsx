import React ,{useEffect} from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import EmailForm from '../components/EmailForm'

const Home = () => {
  useEffect(() => {
    document.title = "B chat"; 
  }, []);

  return (<div>
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
      <div className='email-form'>
        <EmailForm/>
        </div>
    </div>
    </div>
  )
}

export default Home