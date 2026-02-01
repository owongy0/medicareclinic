import { Link, Outlet } from 'react-router-dom'

// This component wraps every page
export default function Layout() {
  return (
    <div>
      {/* Navigation persists across all pages */}
      <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
        <h2>MediCare Clinic</h2>
        <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      
      {/* Outlet is where page-specific content appears */}
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  )
}