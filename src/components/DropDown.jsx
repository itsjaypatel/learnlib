import React from 'react'
import { Dropdown } from 'react-bootstrap'

export const DropDown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic" arrr>
      <i class="fa-solid fa-bars"></i>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
