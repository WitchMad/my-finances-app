import React from 'react';

import {Container, Body} from './styles';

interface IProps {
  open: boolean;
}

const Modal: React.FC<IProps> = ({children, open}) => {
  return (
    <Container open={open}>
      <Body>{children}</Body>
    </Container>
  );
};

export default Modal;
