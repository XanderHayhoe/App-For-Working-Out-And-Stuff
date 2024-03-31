import styled from 'styled-components';


export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30vw; 
  height: 25vw; 
  background-color: #ffffff;
  border: 2px solid #000;
  cursor: pointer;
  gap: 2rem;
  padding: 2rem;
  box-sizing: border-box;
  margin: auto;

 
  @media (max-width: 768px) {
    width: 50vw;
    height: 50vw;
  }

  @media (max-width: 480px) {
    width: 80vw; 
    height: 80vw;
  }
`;

export const Image = styled.img`
  max-width: 90%; 
  max-height: 60%;
  object-fit: contain; 
`;

export const Content = styled.div`
  text-align: center;
  color: #000;
  font-size: 4vw; 
  margin-top: auto;

  @media (max-width: 768px) {
    font-size: 5vw; 
  }

  @media (max-width: 480px) {
    font-size: 6vw; 
  }
`;