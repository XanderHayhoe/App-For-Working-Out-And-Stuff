import styled from 'styled-components';


export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30vw; // 30% of the viewport width
  height: 25vw; // Equal to the width to maintain aspect ratio
  background-color: #ffffff;
  border: 2px solid #000;
  cursor: pointer;
  padding: 20px;
  box-sizing: border-box;
  margin: auto;

  @media (max-width: 768px) {
    width: 50vw; // Increase the size on smaller screens
    height: 50vw;
  }

  @media (max-width: 480px) {
    width: 80vw; // Further increase the size on very small screens
    height: 80vw;
  }
`;

export const Image = styled.img`
  max-width: 90%; // 90% of the button width
  max-height: 60%; // 60% of the button height
  object-fit: contain; 
`;

export const Content = styled.div`
  text-align: center;
  color: #000;
  font-size: 4vw; // Size the text based on the width of the viewport
  margin-top: auto;

  @media (max-width: 768px) {
    font-size: 5vw; // Increase text size on smaller screens
  }

  @media (max-width: 480px) {
    font-size: 6vw; // Further increase text size on very small screens
  }
`;