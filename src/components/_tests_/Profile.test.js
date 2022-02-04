import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';import store from '../../redux/store/configureStore';
import Profile from '../Profile';

describe("The Profile component", () => {
  test("rendering of the Profile component", () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </Provider>
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('My Missions')).toBeInTheDocument();
  });
});

