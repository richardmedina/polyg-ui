import React from 'react'
import { Link } from 'react-router-dom'

import { Form, Row, Col } from 'react-bootstrap'

import FilterableDropdown from 'components/filterable-dropdown/filterable-dropdown.component'
import FilterableTable from 'components/filterable-table/filterable-table.component'

import { phrases } from './resources'
const languages = [
  "English US",
  "Spanish MX"
]


class PhrasesContainer extends React.Component {
  render() {
    return (
      <div className='container'>
        <h2>Phrases</h2>
        <p>Add common and most used phrases to a specific language and <Link to='/notifications'>configure notifications</Link> to be sent to your mobile device as frequently as you want. You will only need to install our Apple App
        </p>
        <p>
          Get you updated and practice over and over again throughout the day.
        </p>

        <h5>My Phrases</h5>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>From: </Form.Label>
              <FilterableDropdown items={languages} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group style={{'float': 'right'}}>
              <Form.Label>To: </Form.Label>
              <FilterableDropdown items={languages} />
            </Form.Group>
          </Col>
        </Row>

        <FilterableTable
          columns={["English", "Spanish", "Word"]}
          data={phrases.map(phrase => ([phrase.English, phrase.Spanish, phrase.Word]))}
        />
      </div>
    )
  }
}

export default PhrasesContainer