import './Messages.css'
import { MdError, MdAnnouncement, MdDone, MdContentCopy } from "react-icons/md";
import copy from 'clipboard-copy'

export function CommonMessage({ text, type }) {

  const icons = {
    "error": <MdError color='white' size={15} className='message-icon' />,
    "info": <MdAnnouncement color='white' size={15} className='message-icon' />,
    "success": <MdDone color='white' size={15} className='message-icon' />
  }

  const types = {
    "error": "#e48165",
    "info": "#8aad7a",
    "success": "#9cc4bf"
  }

  return (
    <div style={{ backgroundColor: types[type] }} className='message-container'>
      {icons[type]}
      <p>{text}</p>
    </div>
  )
}

export function CopyMessage({ text }) {

  const handleCopyClick = () => {
    copy(text)
  }

  return (
    <>
      <div className='copy-message-container'>
        <p>Enlace generado</p>
        <input className='url-input' type="text" placeholder={text} disabled />
        <button type='button' className='button--submit' onClick={handleCopyClick} ><MdContentCopy /></button>
      </div>
    </>
  )
}