import React from 'react'
import { Link } from 'react-router-dom'

import { Form, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt, faMobile } from '@fortawesome/free-solid-svg-icons'

import FilterableDropdown from 'components/filterable-dropdown/filterable-dropdown.component'
import FilterableTable from 'components/filterable-table/filterable-table.component'

const languages = [
  "English US",
  "Spanish MX"
]


class NotificationsContainer extends React.Component {
  render() {
    return (
      <div className='container'>
        <h2>Notifications</h2>
        <p>Configure notifications to send to your mobile devices</p>

        <h5>My Devices</h5>
        <FontAwesomeIcon icon={faMobile} size="3x" />
        <FontAwesomeIcon icon={faAppleAlt} size="3x" />
      </div>
    )
  }
}

export default NotificationsContainer