import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';import store from '../../redux/store/configureStore';
import Mission from '../Missions/Mission';


describe("The missions component", () => {
  test("rendering of the mission component", () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Mission status={'booked'} data={{
            mission_name: 'Thaicom',
            mission_id: 'thaicom',
            description: '	Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
          }} />
        </BrowserRouter>
      </Provider>
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('Thaicom')).toBeInTheDocument();
  });
});



