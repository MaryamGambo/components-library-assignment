import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: "14px 30px 16px";
  color: ${(props) => (props? "#ffffff" : "#ffffff")};
  background-color: ${(props) => ( props.disabled ? "#cccccc" : props.backgroundColor)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const Label: React.FC<LabelProps> = ({
  children,
  text,
  disabled,
  backgroundColor,
   ...props
  }) => {
   return (
    <StyledLabel
      disabled={disabled}
      backgroundColor={backgroundColor}
      {...props}>
      {children}
      {text}
    </StyledLabel>
  );
};

export default Label;
