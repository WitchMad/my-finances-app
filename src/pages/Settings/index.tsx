import React from 'react';

import {Container, ListContainer, ListItem, ListItemText} from './styles';

const Settings: React.FC = () => {
  return (
    <Container>
      <ListContainer>
        <ListItem>
          <ListItemText>Tema</ListItemText>
          <ListItemText>Claro</ListItemText>
        </ListItem>
      </ListContainer>
    </Container>
  );
};

export default Settings;
