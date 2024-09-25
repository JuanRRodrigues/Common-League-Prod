import React, { useState } from 'react';
import http from '../../http';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import styled from 'styled-components';

// Define the styles for the modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f7f7f7',
    border: 'none',
    borderRadius: '10px',
    padding: '30px',
    maxWidth: '400px',
    textAlign: 'center',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
  },
};

// Define the styled components
const StyledButton = styled.button<{ disabled?: boolean }>`
  background-color: ${props => (props.disabled ? '#ccc' : '#e63946')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 12px 20px;
  font-size: 16px;
  margin: 10px 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => (props.disabled ? '#ccc' : '#d62839')};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #e63946;
    outline: none;
    box-shadow: 0 0 5px rgba(230, 57, 70, 0.5);
  }
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-size: 14px;
  text-align: left;
`;

const FormModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>({});
  const [tagLine, setTagLine] = useState<string>('');
  const [gameName, setGameName] = useState<string>('');
  const [idPlayer, setIdPlayer] = useState<string>('');
  const [idTime, setIdTime] = useState<string>('');
  const navigate = useNavigate();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSearch = () => {
    const values = { tagLine, gameName };
    http.post('api/v1/accountsRiot/post', values)
      .then(response => {
        setUserData(response.data);
        setIdTime(response.data.id); // Set the ID
        setIdPlayer(localStorage.getItem('userId') || ''); // Set the player ID
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleSubmit = () => {
    const values = { idPlayer, idTime };
    http.post('/api/v1/accountsRiot/addAccountRiot', values)
      .then(response => {
        setUserData(response.data);
        setTagLine(''); // Clear tag line
        setGameName(''); // Clear game name
        setIdPlayer(''); // Clear player ID
        setIdTime(''); // Clear time ID
        closeModal();
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  return (
    <>
      <StyledButton onClick={openModal}>Associar conta Riot</StyledButton>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <div>
          <StyledLabel htmlFor="tagLine">Tag Line:</StyledLabel>
          <StyledInput
            type="text"
            id="tagLine"
            value={tagLine}
            onChange={(e) => setTagLine(e.target.value)}
            placeholder="Digite sua tag line"
          />

          <StyledLabel htmlFor="gameName">Game Name:</StyledLabel>
          <StyledInput
            type="text"
            id="gameName"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
            placeholder="Digite o nome do jogo"
          />

          <StyledButton onClick={handleSearch}>Buscar</StyledButton>

          <StyledInput
            type="hidden"
            id="idTime"
            value={idTime}
            readOnly
          />

          <StyledInput
            type="hidden"
            id="idPlayer"
            value={idPlayer}
            readOnly
          />

          <StyledButton
            onClick={handleSubmit}
            disabled={!idTime || !idPlayer}
          >
            Associar
          </StyledButton>
        </div>
      </Modal>
    </>
  );
};

export default FormModal;
