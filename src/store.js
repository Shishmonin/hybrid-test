import { createStore } from 'redux';

import reducer from './reducers';

// Метод проверки наличия данных в локал хранилище
const persistedState = loadFromLocalStorage();

const store = createStore(
  reducer,
  persistedState
  );
// Ф-ция записи в локал хранилище
function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state',serializedState)
  } catch(e) {
    console.log(e);
  }
}
// Подписываемся на изменения в стейте, записывая новое состояние в локал хранилище
store.subscribe(() => saveToLocalStorage(store.getState()));

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch(e) {
    console.log(e)
    return undefined
  }
}

export default store;