import React from 'react';

import {
  Container,
  Main,
  MainIcon,
  MainView,
  MainViewText,
  MainViewTitle,
  GraphicView,
  GraphicViewSubView,
  GraphicViewValueView,
  GraphicViewValueText,
  GraphicViewGrid,
  PercentageView,
  PercentageTitle,
  PercentageSubtitle,
  PercentageViewValueView,
  GridHistory,
  GridHistoryItem,
  GridTitle,
  GridValueRed,
  GridValueGreen,
  GridValueDescription,
} from './styles';

import {PieChart, ProgressCircle, Grid} from 'react-native-svg-charts';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home: React.FC = () => {
  return (
    <Container>
      <Main>
        <MainIcon />
        <MainView>
          <MainViewText>Você tem</MainViewText>
          <MainViewTitle>R$ 1.000.000,00</MainViewTitle>
          <MainViewText>Guardados</MainViewText>
        </MainView>
      </Main>
      <GraphicView>
        <GraphicViewValueView>
          <GraphicViewGrid>
            <GraphicViewSubView>
              <Icon name="cash-plus" size={24} color="#222" />
              <GraphicViewValueText>
                Ganhos Totais: R$ 1.000,00
              </GraphicViewValueText>
            </GraphicViewSubView>
            <GraphicViewSubView>
              <Icon name="cash-minus" size={24} color="#222" />
              <GraphicViewValueText>
                Gastos Totais: R$ 1.000,00
              </GraphicViewValueText>
            </GraphicViewSubView>
            <GraphicViewSubView>
              <GraphicViewValueText>
                Balanço final: R$ 0,00
              </GraphicViewValueText>
            </GraphicViewSubView>
          </GraphicViewGrid>
          <PieChart
            style={{height: 180, width: 160, marginLeft: 'auto'}}
            data={[
              {
                value: 100,
                svg: {
                  fill: '#7159c1',
                },
                key: 'pie-1',
              },
              {
                value: 20,
                svg: {
                  fill: '#ffbb00',
                },
                key: 'pie-2',
              },
              {
                value: 30,
                svg: {
                  fill: '#f34242',
                },
                key: 'pie-3',
              },
            ]}>
            <Grid />
          </PieChart>
        </GraphicViewValueView>
      </GraphicView>
      <PercentageView>
        <GraphicViewValueView>
          <ProgressCircle
            style={{height: 60, width: 60}}
            progress={0.85}
            progressColor={'#8641f4'}>
            <Grid />
          </ProgressCircle>
          <PercentageViewValueView>
            <PercentageTitle>Você teve uma economia de 85%</PercentageTitle>
            <PercentageSubtitle>Sua meta é de 75%</PercentageSubtitle>
          </PercentageViewValueView>
        </GraphicViewValueView>
      </PercentageView>
      <GridHistory>
        <GridHistoryItem>
          <GridTitle>Maior gasto deste mês</GridTitle>
          <GridValueRed>-R$ 300,00</GridValueRed>
          <GridValueDescription>Alimentação</GridValueDescription>
        </GridHistoryItem>
        <GridHistoryItem>
          <GridTitle>Maior ganho deste mês</GridTitle>
          <GridValueGreen>+R$ 1.500,00</GridValueGreen>
          <GridValueDescription>Recebimento BFC</GridValueDescription>
        </GridHistoryItem>
      </GridHistory>
    </Container>
  );
};

export default Home;
