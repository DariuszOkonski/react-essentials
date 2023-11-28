import React, { Fragment } from 'react';

export default function Tabs({ children, buttons, ButtonsContainer }) {
  // const ButtonsContainer = buttonsContainer;

  return (
    <Fragment>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </Fragment>
  );
}
