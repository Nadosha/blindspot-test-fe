import styled from "styled-components";
import { Form as FormBase, Radio } from 'antd';
import {CircleImg} from "@UI/UserInfo/UserInfo.styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  min-width: 250px;
  max-width: 550px;
  margin: 0 auto;
  text-align: center;
  > h2 {
    color: #6d6565;
  }
`

export const Form = styled(FormBase)`
  font-family: Open Sans;
  font-style: normal;

  .ant-form-item-label > label {
    margin: unset;
    text-align: start;
    color: #6d6565;
  }

  .ant-input::placeholder,
  .ant-select-selection-placeholder {
    color: #6d6565;
  }

  .ant-form-item {
    margin-bottom: 20px;
  }
  
  .ant-form-item-control {
    margin: auto;
  }
`;
export const RadioGroup = styled(Radio.Group)`
  display: flex;
  flex-direction: row;
`
export const RadioItem = styled(Radio.Button)`
  height: unset;
  flex-basis: 50%;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: unset;
  padding: 5px;
`