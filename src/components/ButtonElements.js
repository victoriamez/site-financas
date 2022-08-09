import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 10px;
  background: ${({primary}) => (primary ? 'linear-gradient(45deg, #4cb3e9 30%, #377D33 90%)' : '#377D33')};
  white-space: nowrap;
  // box-shadow:
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#0D3B66' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border:none;
  cursor: pointer;
  display: flex;
  justufy-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;


  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};

  }




`
