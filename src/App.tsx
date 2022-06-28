import React, {Suspense} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {PersistGate} from 'redux-persist/integration/react';
import {Navigator} from 'navigation';
import {configureStores} from 'store/store';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';

const {persistor, store} = configureStores();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <I18nextProvider i18n={i18n}>
            <Suspense fallback={null}>
              <PersistGate loading={null} persistor={persistor}>
                <Navigator />
                <Toast />
              </PersistGate>
            </Suspense>
          </I18nextProvider>
        </PaperProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
