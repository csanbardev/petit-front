import './Messages.css'
import { MdError, MdAnnouncement, MdDone } from "react-icons/md";

export function CommonMessage({ text, type }) {

  const icons = {
    "error": <MdError color='white' size={15} className='message-icon' />,
    "info": <MdAnnouncement color='white' size={15} className='message-icon' />,
    "success":  <MdDone color='white' size={15} className='message-icon' />
  }

  const types = {
    "error": "#e48165",
    "info": "#8aad7a",
    "success": "#9cc4bf"
  }

  return (
    <div style={{backgroundColor: types[type]}} className='message-container'>
      {icons[type]}
      <p>{text}</p>
    </div>
  )
}