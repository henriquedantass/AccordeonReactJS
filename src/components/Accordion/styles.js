import styled from 'styled-components';

export const Item = styled.div`
    background-color:gray;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-width:500px;
    padding:1rem;
    
  header {
    align-items: center;
    background-color: transparent;
    display: flex;
    justify-content:space-around;

    span {
      color: #f2d788;
      font-size: 22px;
      line-height: 67px;
      color: lightgray;
      font-weight: 600;
    }

    svg {
      color: inherit;
      transform: rotate(${props => (props.isOpen ? 180 : 0)}deg);
      transition: 0.2s ease-in-out;
      margin-left: 0px;
      width:20px;
      height:20px;
      margin-right:2rem;
    }
  }

  main {
    max-height: ${props => (props.isOpen ? 1000 : 0)}px;
    overflow: hidden;
    transition: 1s ease-in-out;
  }

  & + div {
    border-top: 1px solid;
    border-color: inherit;
  }
`;


export const Container = styled.div`

  display:flex;
  justify-content:center;
  align-items:center; 
  
  

`;