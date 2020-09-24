import React from 'react'
import { Table } from 'react-bootstrap'

class FilterableTable extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      columns: props.columns,
      data: props.data
    }
  }
  render() {
    const { columns, data } = this.state
    
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            { 
              columns.map((col, idx) =>
                <th key={idx}>{col}</th>
              )
            }
          </tr>
        </thead>
        <tbody>
            {
              data.map((row, rowId) =>
                <tr key={rowId}>
                  { 
                    row.map((cell, cellId) =>
                      <td key={`${rowId}_${cellId}`}>{cell}</td>
                    )
                  }
                </tr>
              )
            }
          </tbody>
      </Table>
    )
  }
}

export default FilterableTable
