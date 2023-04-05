import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    flex-direction: row;
    height: 100vh;
`

export const Left = styled.div`
    width: ${({ sideBarState }) => (sideBarState ? '270px' : '0')};
    display: flex;
    flex-direction: column;
    transition: width 0.5s;
`

export const Right = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
`