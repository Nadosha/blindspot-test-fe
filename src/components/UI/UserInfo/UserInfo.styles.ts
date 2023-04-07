import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  border-right: 1px solid rgba(33, 37, 41, 0.08);
  text-decoration: none;
  align-items: center;
  align-self: flex-start;
  gap: 15px;
  padding: 0 5px 0 15px;
`

export const CircleImg = styled.div<{ src: string }>`
    background-image: ${({ src }) => `url(${src})`};
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
`

export const UserName = styled.h3`
  color: #6d6565;
  font-weight: 600;
  margin: 0;
`
export  const UserScore = styled.h4`
  color: #494848;
  font-weight: 300;
  margin: 0;
`
