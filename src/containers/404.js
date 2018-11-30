import React from 'react'
import { Link } from 'react-static'

//

import Sidebar from 'components/Sidebar'

export default () => (
  <Sidebar>
    <h1>
      404 - Oh no's! We couldn't find that page{'  '}
      <span role="img" aria-label="distraught face">
        😩
      </span>
    </h1>

    <p>
      You can find everything on the site on the sidebar, or some important links below.
    </p>
    <li><Link to="/">Homepage</Link></li>
  </Sidebar>
)
