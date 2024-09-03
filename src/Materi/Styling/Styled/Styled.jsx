import styled from 'styled-components';

const Button = styled.button`
  padding: 12px;
  margin: 12px;
  border: none;
  background-color: #424242;
  color: #e6e6e6;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: #828282;
  }
`;

export default function Styled() {
  return <Button>Styled Components</Button>;
}
