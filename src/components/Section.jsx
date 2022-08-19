 import React from 'react'
import styled from 'styled-components'

const Section = ({backgroundImg,title,description,leftBtnText,rightBtnText}) => {
  return (
    <Container bgImage={backgroundImg}>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>

        <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            <RightButton>{rightBtnText}</RightButton>
        </ButtonGroup>
        <DownArrow src="./assets/images/down-arrow.svg"/>
    </Container>
)
}

export default Section

const Container = styled.div`
    background-color: blue;
    width: 100%;
    height: 100vh;
    background-image: ${props => `url('./assets/images/${props.bgImage}')`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display : flex;
    flex-direction: column;
    align-items: center;

`

const ItemText = styled.div`
    padding-top: 20vh;
    text-align: center;
    flex-grow: 1;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media(max-width: 768px) {
        display: block;
    }
 `

 const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    border-radius: 100px;
    color: white; 
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 12px;
    opacity: 0.85;
    margin : 8px; 
    cursor: pointer; 
 `

 const RightButton = styled(LeftButton)`
    background-color : white;
    color : black;
    opacity: 0.65;
 `

 const DownArrow = styled.img`
    height : 40px;
    animation: animateDown infinite 1.5s;
    margin-bottom: 50px;
 `

