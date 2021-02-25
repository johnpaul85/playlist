import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import AppComp from './components/AppComp/AppComp';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <AppComp />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
