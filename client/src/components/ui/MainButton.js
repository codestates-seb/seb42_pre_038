import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainButtonWrap = styled.button`
  height: 37px;
  padding: 10px;
  background-color: hsl(206deg 100% 52%);
  font-size: 13px;
  color: #ffffff;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  cursor: pointer;
  display: inline-block;
  font-weight: normal;
  position: relative;
  outline: none;
  text-align: center;
  text-decoration: none;
  position: relative;
  line-height: 1;

  &:hover {
    background-color: hsl(206, 100%, 40%);
  }
`;

const MainButton = ({ children, ButtonProps }) => {
  return <MainButtonWrap onClick={ButtonProps}>{children}</MainButtonWrap>;
};

MainButton.propTypes = {
  children: PropTypes.node.isRequired,
  ButtonProps: PropTypes.func,
};

export default MainButton;
