import './App.css';
import { useState } from 'react';
import Toggle from './components/Toggle';
import Tab from './components/Tab';
import Modal from './components/Modal';
import ClickToEdit from './components/ClickToEdit';
import styled from '@emotion/styled/';

function App() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Toggle />
      <Tab />
      <h2 style={{ padding: '0 2em' }}>Modal</h2>
      <Button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open Modal
      </Button>
      {openModal && <Modal closeModal={setOpenModal} />}
      <ClickToEdit />
    </>
  );
}

const Button = styled.button`
  display: block;
  padding: 1.5em;
  margin: 0 auto;
  border: none;
  border-radius: 25px;
  color: #fff;
  background-color: #4900ce;
  cursor: pointer;
`;


export default App;
