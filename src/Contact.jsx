import { useState } from 'react'

export default function Contact() {
  // State: Form data stored in component memory
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // State: Track if form is submitted
  const [status, setStatus] = useState('idle')

  // Handler: Update state when user types
  const handleChange = (e) => {
    setFormData({
      ...formData,           // Keep existing values
      [e.target.name]: e.target.value  // Update only the changed field
    })
  }

  // Handler: Send data to backend
  const handleSubmit = async (e) => {
    e.preventDefault()  // Prevent browser from reloading page
    setStatus('sending')
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div>
      <h1>Contact Us</h1>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div>
          <label>Message:</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none' }}>
          Send Message
        </button>

        {status === 'sending' && <p>Sending...</p>}
        {status === 'success' && <p style={{ color: 'green' }}>Message sent!</p>}
        {status === 'error' && <p style={{ color: 'red' }}>Failed to send.</p>}
      </form>
    </div>
  )
}