import styled from 'styled-components'

const FormGroupBit = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin: 1em 0;
    @media (max-width: 780px) {
        grid-template-columns: 1fr;
    }
`
const LabelBit = styled.label`
    line-height: 1.1;
    font-size: 1.5em;
    margin: .35em;
    font-weight: bold;
`
const SelectBit = styled.select`
    width: 100%;
    min-width: 15ch;
    max-width: 40ch;
    min-height: 5ch;
    box-shadow: 0px 0px 2px #696969;
    border: none;
    border-radius: 0.25em;
    padding: 0.25em 0.5em;
    font-size: 1.25rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: #fff;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #77b5fe;
    }
    @media (max-width: 780px) {
        grid-template-columns: 1fr;
        max-width: none;
    }
    
`

export {SelectBit, LabelBit , FormGroupBit};