import { useState, useEffect } from 'react'

export const useShow = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener('scroll', handleShow)
    return () => {
      window.removeEventListener('scroll', handleShow)
    }
  }, [])

  return show
}
