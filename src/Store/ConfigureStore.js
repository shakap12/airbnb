import { configureStore } from '@reduxjs/toolkit';
import Reducer from '../Features/Task';

const store = configureStore({ reducer: Reducer })
export default store;