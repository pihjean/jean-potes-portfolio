import { useState } from 'react'

const EXTENSIONS = ['jpg', 'png', 'jpeg', 'webp']

/* base = path na walang extension, halimbawa "/projects/motorwash-app/1" */
function SmartImage({ base, alt, ...rest }) {
  const [attempt, setAttempt] = useState(0)
  const [failed, setFailed] = useState(false)

  const handleError = () => {
    if (attempt < EXTENSIONS.length - 1) {
      setAttempt(attempt + 1)
    } else {
      setFailed(true)
    }
  }

  return (
    <img
      src={`${base}.${EXTENSIONS[attempt]}`}
      alt={alt}
      onError={handleError}
      style={failed ? { visibility: 'hidden' } : undefined}
      {...rest}
    />
  )
}

export default SmartImage