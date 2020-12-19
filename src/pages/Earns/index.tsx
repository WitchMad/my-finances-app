import React, {useState, useEffect} from 'react';

import {KeyboardAvoidingView} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

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
  MainPreviousValueRed,
  MainPreviousValueDesc,
  TextField,
  ModalContainer,
  ModalTitle,
  ModalWrapButtons,
  ModalButtonContained,
  ModalButtonOutline,
  ModalButtonTextWhite,
  ModalButtonTextGreen,
  ButtonAdd,
  ButtonAddText,
  ModalValue,
  ModalTitleValue,
  ModalDescriptionValue,
  BackButton,
  BackButtonText,
} from './styles';

import Modal from '../../components/Modal';

interface IEarn {
  id: number;
  value: string;
  title: string;
  description?: string;
  createdAt: Date;
}

const Earn: React.FC = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [values, setValues] = useState({
    value: '',
    title: '',
    description: '',
  });
  const [detail, setDetail] = useState({
    open: false,
    data: {
      value: '',
      title: '',
      description: '',
      date: '',
    },
  });
  const [earns, setEarns] = useState<IEarn[]>([]);

  useEffect(() => {
    async function loadEarns() {
      try {
        const items = await AsyncStorage.getItem('earns');
        if (items) {
          setEarns(JSON.parse(items));
        }
      } catch (err) {
        console.log(err);
      }
    }
    loadEarns();
  }, []);

  async function handleAdd() {
    try {
      const id = Math.random() * 100000000001;
      const createdAt = new Date();
      setEarns([
        ...earns,
        {
          id,
          value: values.value,
          title: values.title,
          description: values.description,
          createdAt,
        },
      ]);
      await AsyncStorage.setItem(
        'earns',
        JSON.stringify([
          ...earns,
          {
            id,
            value: values.value,
            title: values.title,
            description: values.description,
            createdAt,
          },
        ]),
      );
      setValues({
        value: '',
        title: '',
        description: '',
      });
      setOpenAdd(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Modal open={openAdd}>
        <ModalContainer>
          <ModalTitle>Adicionar Ganho</ModalTitle>
          <KeyboardAvoidingView>
            <TextField
              placeholder="Valor"
              keyboardType="numeric"
              value={values.value}
              onChangeText={(e) => setValues({...values, value: e})}
            />
            <TextField
              placeholder="Tĩtulo"
              autoCorrect
              value={values.title}
              onChangeText={(e) => setValues({...values, title: e})}
            />
            <TextField
              placeholder="Descrição"
              multiline
              autoCorrect
              value={values.description}
              onChangeText={(e) => setValues({...values, description: e})}
            />
          </KeyboardAvoidingView>
          <ModalWrapButtons>
            <ModalButtonOutline onPress={() => setOpenAdd(false)}>
              <ModalButtonTextGreen>Cancelar</ModalButtonTextGreen>
            </ModalButtonOutline>
            <ModalButtonContained onPress={handleAdd}>
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
                  description: '',
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
          <MainSubtitle>Você ganho um total de</MainSubtitle>
          <MainTitle>R$ 1.000,00</MainTitle>
          <MainSubtitle>em novembro</MainSubtitle>
        </MainView>
        <MainPrevious>
          <MainPreviousValueRed>-10%</MainPreviousValueRed>
          <MainPreviousValueDesc>Em relação à outubro</MainPreviousValueDesc>
        </MainPrevious>
      </Main>
      <List
        data={earns}
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
            <ListItemTitle>+ R$ {item.value}</ListItemTitle>
            <ListItemView>
              <ListItemDescription>{item.title}</ListItemDescription>
              <ListItemDate>10/10/2020</ListItemDate>
            </ListItemView>
          </ListItem>
        )}
      />
      <ButtonAdd onPress={() => setOpenAdd(true)}>
        <ButtonAddText>+Adicionar Ganho</ButtonAddText>
      </ButtonAdd>
    </Container>
  );
};

export default Earn;
