import styled from 'styled-components'

const ListContainer = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 grid-gap: 0px;
 border-radius: 6px;
 box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
 margin-top: 45px;
`
const ListHeader = styled.div`
 font-size: 1.6em;
 padding: .5em;
 text-align: center;
 border-top: 1px solid #dfdfdf;
 font-weight: bold;
`
const ListItem = styled.div`
 font-size: 1.2em;
 padding: .5em;
 text-align: center;
 border-top: 1px solid #dfdfdf;
`


function ListUI(props) {
    return (
        <ListContainer>
            <ListHeader>{props.header}</ListHeader>
            {
                props.itemList.map(item => (
                <ListItem key={item.place_code}>{item.description}</ListItem>
                ))
            }
        </ListContainer>
    )
}

export default ListUI;