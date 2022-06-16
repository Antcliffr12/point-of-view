import react from "react"
import image from 'next/image'


function Logo({ ...page }) {
    
  return (
    <div className="companies">
      <div className="container">
        <div className="row">
          <div className="col-4">
                <h2>{page.title}</h2>
          </div>
          <div className="col-8">
            Companies
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logo