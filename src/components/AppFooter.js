import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Sistema De Gestion
        </a>
        <span className="ms-1">&copy; 2021 Consulting Group.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">by</span>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Jerry Cano
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
