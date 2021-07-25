import styled, { css } from 'styled-components'

const ListContainer = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 gap: 20px;
`
const ListTitle = styled.div`
 color: red;
`
const ListHeader = styled.div`
 color: purple;
`
const ListItem = styled.div`
 color: blue;
`


function ListUI() {
    return (
        <ListContainer>
            <ListTitle>Stop Title</ListTitle>
            <ListHeader>Destination</ListHeader>
            <ListItem>route info</ListItem>
        </ListContainer>
    )
}

export default ListUI;