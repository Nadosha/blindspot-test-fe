import styled from "styled-components";
import {Button} from "antd";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
    background: white;
    border-bottom: 1px solid rgba(33, 37, 41, 0.08);
    transition: all 0.3s;
`

export const LogoutBtn = styled(Button)`
  display: flex;
  gap: 10px;
  font-weight: 900;
  color: #6d6565;
  margin-left: 20px;
`