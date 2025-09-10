import Header from '../sections/Header'

const PageLayout = ({ children, className = "" }) => {
  return (
    <div className="bg-tactical-dark text-white min-h-screen">
      <Header />
      
      {/* Main content with padding for fixed header */}
      <main className={`pt-20 ${className}`}>
        {children}
      </main>
    </div>
  )
}

export default PageLayout