import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducer';
import thunk from 'redux-thunk';


export const loadState = () => {
  try {
  const serializedState = localStorage.getItem("state");
  if (!serializedState) return undefined;
  else return JSON.parse(serializedState);
  } catch (err) {
  return undefined;
  }
 };
  
 export const saveState = state => {
  try {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
  } catch (err) {
  }
 };
  
 const persistedStore = loadState();
 const initialState = persistedStore;

export function configureStore() {
  const store = createStore(reducer, initialState, applyMiddleware(thunk));
  return store;
}

export const store = configureStore();

store.subscribe(() => {
  saveState(store.getState());
 });