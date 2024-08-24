import React, { useState } from 'react';
import "./AppNavbar.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  ButtonGroup
} from 'reactstrap';
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import ProgressBar from "../ProgressBar/ProgressBar";

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" dark  light className='app-navbar' container='fluid'>
        <NavbarBrand className="aaa" href="/">PathVisualizer</NavbarBrand>
        <NavbarToggler onClick={toggle} type='button' className="me-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav  navbar>
            <NavItem id={"Tooltip-" + 6}>
              <NavLink href="https://github.com/chakshu71/PathFinding-Algorithm-Path-visualizer.git" target='_blank'>GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle id={"Tooltip-" + 5} nav caret>
                Algorithms
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Button onClick={() => { props.handleDijkstra(); props.handleVisualization() }}>Dijkstra</Button>
                </DropdownItem>
                <DropdownItem>
                  <Button onClick={() => { props.handleDFS(); props.handleVisualization() }}>DFS</Button>              
                </DropdownItem>
                <DropdownItem>
                  <Button onClick={() => { props.handleBFS(); props.handleVisualization() }}>BFS</Button>
                </DropdownItem>
                <DropdownItem>
                  <Button onClick={() => { props.handleAstar(); props.handleVisualization() }}>A*</Button>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle id={"Tooltip-" + 4} nav caret>
                Generate Maze
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Button onClick={() => { props.handleMaze(); props.handleVisualization() }}>Recursive Division</Button>
                </DropdownItem>
                <DropdownItem>
                    <Button onClick={props.handleRandomMaze}>Random Maze</Button>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>  
        </Collapse>
        <NavbarText id={"Tooltip-" + 3}>
          <ProgressBar visitedNodes={props.visitedNodes} shortestNodes={props.shortestNodes} />
        </NavbarText>
        <NavbarText className="clear-functions">
          <ButtonGroup>
            <Button id={"Tooltip-" + 0} onClick={props.handleClearPath}>Clear Path</Button>
            <Button id={"Tooltip-" + 1} onClick={props.handleClearGrid}>Clear Grid</Button>
          </ButtonGroup>          
        </NavbarText>
        <NavbarText id={"Tooltip-" + 2}>
          <DarkModeToggle />
        </NavbarText>
      </Navbar>
    </div>
  );
}

export default AppNavbar;