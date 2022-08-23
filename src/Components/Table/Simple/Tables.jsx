import React from 'react'

// stylesheet
import './Tables.scss';

function Tables() {
  return (
    <div className='table_container'>
      <table>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Degree</th>
            <th>E-mail</th>
            <th>Mobile</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Kiran</td>
            <td>22</td>
            <td>B.E</td>
            <td>kirantext@gmail.com</td>
            <td>9999999999</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Kiran</td>
            <td>22</td>
            <td>B.E</td>
            <td>kirantext@gmail.com</td>
            <td>9999999999</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Kiran</td>
            <td>22</td>
            <td>B.E</td>
            <td>kirantext@gmail.com</td>
            <td>9999999999</td>
          </tr>
      </table>
    </div>
  )
}

export default Tables