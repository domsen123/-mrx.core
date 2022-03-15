import { createStore, useStore } from '@mrx/helper';
import type { MainContext } from '@mrx/types';

export const install = ({ app, isClient, initialState }: MainContext) => {
  const pinia = createStore();
  app.use(pinia);

  const store = useStore();

  if (isClient) {
    store.replaceStore(initialState.pinia || {});
  } else {
    initialState.pinia = store.getStore;
  }
};
