import React, {useState} from 'react';

import {KeyboardAvoidingView} from 'react-native';

import {
  Container,
  Main,
  MainView,
  MainTitle,
  MainSubtitle,
  List,
  ListItem,
  ListItemTitle,
  ListItemView,
  ListItemDescription,
  ListItemDate,
  MainPrevious,
  MainPreviousValueGreen,
  MainPreviousValueDesc,
  TextField,
  ModalContainer,
  ModalTitle,
  ModalWrapButtons,
  ModalButtonContained,
  ModalButtonOutline,
  ModalButtonTextWhite,
  ModalButtonTextRed,
  ButtonAdd,
  ButtonAddText,
  ModalValue,
  ModalTitleValue,
  ModalDescriptionValue,
  BackButton,
  BackButtonText,
} from './styles';

import Modal from '../../components/Modal';

const Earn: React.FC = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [detail, setDetail] = useState({
    open: false,
    data: {
      value: '',
      title: '',
      description: 'Pizza da Atlântico',
      date: '',
    },
  });

  return (
    <Container>
      <Modal open={openAdd}>
        <ModalContainer>
          <ModalTitle>Adicionar Gasto</ModalTitle>
          <KeyboardAvoidingView>
            <TextField placeholder="Valor" keyboardType="numeric" />
            <TextField placeholder="Tĩtulo" autoCorrect />
            <TextField placeholder="Descrição" multiline autoCorrect />
          </KeyboardAvoidingView>
          <ModalWrapButtons>
            <ModalButtonOutline onPress={() => setOpenAdd(false)}>
              <ModalButtonTextRed>Cancelar</ModalButtonTextRed>
            </ModalButtonOutline>
            <ModalButtonContained>
              <ModalButtonTextWhite>Salvar</ModalButtonTextWhite>
            </ModalButtonContained>
          </ModalWrapButtons>
        </ModalContainer>
      </Modal>
      <Modal open={detail.open}>
        <ModalContainer>
          <ModalValue>{detail.data.value}</ModalValue>
          <ModalTitleValue>{detail.data.title}</ModalTitleValue>
          <ModalDescriptionValue>
            {detail.data.description}
          </ModalDescriptionValue>
          <ModalDescriptionValue>{detail.data.date}</ModalDescriptionValue>
          <BackButton
            onPress={() =>
              setDetail({
                open: false,
                data: {
                  value: '',
                  title: '',
                  description: 'Pizza da Atlântico',
                  date: '',
                },
              })
            }>
            <BackButtonText>Voltar</BackButtonText>
          </BackButton>
        </ModalContainer>
      </Modal>
      <Main>
        <MainView>
          <MainSubtitle>Você gastou um total de</MainSubtitle>
          <MainTitle>R$ 250,00</MainTitle>
          <MainSubtitle>em novembro</MainSubtitle>
        </MainView>
        <MainPrevious>
          <MainPreviousValueGreen>-35%</MainPreviousValueGreen>
          <MainPreviousValueDesc>Em relação à outubro</MainPreviousValueDesc>
        </MainPrevious>
      </Main>
      <List
        data={[
          {
            value: '-R$ 140,00',
            title: 'Alimentação',
            description: 'Bar do paulinho',
          },
          {
            value: '-R$ 140,00',
            title: 'Transporte',
            description: 'Uber - Casa de Camylla',
          },
          {
            value: '-R$ 140,00',
            title: 'Alimentação',
            description: 'Pizza da Atlântico',
          },
          {
            value: '-R$ 140,00',
            title: 'Alimentação',
            description: 'Pizza da Atlântico',
          },
          {
            value: '-R$ 140,00',
            title: 'Alimentação',
            description: 'Pizza da Atlântico',
          },
          {
            value: '-R$ 140,00',
            title: 'Alimentação',
            description: 'Pizza da Atlântico',
          },
          {
            value: '-R$ 140,00',
            title: 'Transporte',
            description: 'Pizza da Atlântico',
          },
          {
            value: '-R$ 140,00',
            title: 'Transporte',
            description: 'Pizza da Atlântico',
          },
          {
            value: '-R$ 140,00',
            title: 'Alimentação',
            description: 'Pizza da Atlântico',
          },
          {
            value: '-R$ 140,00',
            title: 'Alimentação',
            description: 'Pizza da Atlântico',
          },
        ]}
        renderItem={({item, index}) => (
          <ListItem
            key={String(index)}
            onPress={() =>
              setDetail({
                open: true,
                data: {
                  ...item,
                  date: '10/10/2020',
                },
              })
            }>
            <ListItemTitle>{item.value}</ListItemTitle>
            <ListItemView>
              <ListItemDescription>{item.title}</ListItemDescription>
              <ListItemDate>10/10/2020</ListItemDate>
            </ListItemView>
          </ListItem>
        )}
      />
      <ButtonAdd onPress={() => setOpenAdd(true)}>
        <ButtonAddText>+Adicionar Gasto</ButtonAddText>
      </ButtonAdd>
    </Container>
  );
};

export default Earn;
