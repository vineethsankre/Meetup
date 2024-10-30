import {Link} from 'react-router-dom'

import {NavHeader, WebsiteLogo} from './styledComponents'

const Header = () => (
  <NavHeader>
    <Link to="/">
      <WebsiteLogo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </NavHeader>
)

export default Header
