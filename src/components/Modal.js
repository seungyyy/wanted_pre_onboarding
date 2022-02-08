import styled from '@emotion/styled/';

const Modal = ({ closeModal }) => {

  return (
    <>
      <ModalBackground>
        <ModalContainer>
          <button onClick={()=> closeModal(false)} className="modal-btn"> X </button>
          <p className="modal-text">HELLO CODESTATES!</p>
        </ModalContainer>
      </ModalBackground>
    </>
  );
};

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(150, 150, 150);
`;

const ModalContainer = styled.article`
  width: 400px;
  height: 200px;
  border-radius: 30px;
  background-color: #fff;
  .modal-btn {
    display: block;
    margin: 10px auto;
    font-size: 14px;
    border: none;
    background-color: inherit;
    cursor: pointer;
  }
  .modal-text {
    font-size: 20px;
    color: #4900ce;
    line-height: 100px;
    text-align: center;
  }
`;


export default Modal;
