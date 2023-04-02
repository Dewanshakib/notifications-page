import { useState } from 'react'
import './App.css'
import UserData from './Data'

function App() {
  const [notifications, setnotifications] = useState(UserData)

  const handleNotification = (id) => {
    setnotifications((prev) => prev.map(n => 
      (
        n.id === id ? {...n,isUnread:false} : {...n}
      )))
  }

  const handleMarkAll = () => {
    setnotifications((prev) => prev.map(n => ({...n,isUnread:false})))
  }
  return (
    <div className="font-Jakarta h-screen w-full bg-primary-l-g-blue p-4 grid place-items-center  md:px-40 lg:px-80">
      <div className="bg-primary-white rounded-lg shadow-2xl shadow-primary-l-g-blue-1">
      <header className='flex justify-between items-center px-3 pt-8 pb-5 md:px-6'>
        <div className="flex items-center gap-2">
          <h1 className='text-xl font-bold text-primary-v-d-blue'>Notifications</h1>
          <span className='bg-primary-blue px-[10px] py-1 rounded-md text-sm text-primary-white font-bold'>{notifications.filter(n => n.isUnread).length}</span>
        </div>
        <button className="text-primary-d-g-blue-3 font-bold text-sm duration-300 hover:text-primary-blue" onClick={handleMarkAll}>Mark all as read</button>
      </header>
     <div className="flex flex-col gap-4 px-3 pb-3 md:px-6 md:pb-6">
      {notifications && notifications.map((n) => (
        <div className={`flex px-3 py-[10px] rounded-md ${n.isUnread ? "bg-primary-l-g-blue-1":"bg-primary-white"}`} key={n.id} onClick={() => handleNotification(n.id)}>
          <img src={n.author.src} alt={n.author.name} className='w-10 h-10 mr-4 cursor-pointer'/>
          <div>
            <div className="text-sm">
              <a className='text-primary-v-d-blue font-bold inline-block duration-300 hover:text-primary-blue' href={n.author.href}>{n.author.name}</a>
              <p className='inline-block text-primary-d-g-blue-3 mx-1'>{n.text}</p>
              {n.link && (<a className='font-bold text-primary-v-d-blue duration-300 hover:text-primary-blue' href={n.link.href}>{n.link.text}</a>)}
              {n.isUnread && <span className="ml-3 w-3 h-3 inline-block rounded-full bg-primary-red"></span>}
              
            </div>
            <p className='text-sm text-primary-g-blue'>{n.time}</p>
            {n.privateMessage && (
              <p className="border mt-3 rounded-md text-sm text-primary-d-g-blue-3 duration-300 hover:bg-primary-l-g-blue-1 p-[10px]">{n.privateMessage}</p>
            )}
          </div>

          {n.image && 
            <a className='w-12 h-12 ml-auto' href={n.image.href}>
            <img src={n.image.src} alt={n.image.alt} className='w-10 h-10'/>
            </a>}
        </div>
      ))}
     </div>
      </div>
    </div>
  )
}

export default App
