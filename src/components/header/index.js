import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 100px;
`;

const Header = styled.a`
  text-align: center;
  margin-bottom: 16px;
  display: block;
`;

export default () =>
  process.env.REACT_APP_LOGO || process.env.REACT_APP_NAME ? (
    <Header href={process.env.REACT_APP_LINK || "#"}>
      {process.env.REACT_APP_LOGO ? (
        <Logo
          src={process.env.REACT_APP_LOGO}
          alt={process.env.REACT_APP_NAME}
        />
      ) : (
        <Title>{process.env.REACT_APP_NAME}</Title>
      )}
    </Header>
  ) : null;
