import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  margin: 1.5rem auto;
  width: 90%;
  cursor: pointer;
  font-weight: bold;

  padding: 0.5rem;

  transition: all 0.2s;

  &:hover{
    background-color: #f19066;
    border: 1px solid white;
    color: white;
  }
`

export default Button