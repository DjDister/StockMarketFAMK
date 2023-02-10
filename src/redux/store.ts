import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./profileSlice";

class StateLoader {
  loadState() {
    try {
      let serializedState = localStorage.getItem("http://localhost:state");

      if (serializedState === null) {
        return this.initializeState();
      }

      return JSON.parse(serializedState);
    } catch (err) {
      console.log(err);
      return this.initializeState();
    }
  }

  saveState(state: any) {
    try {
      let serializedState = JSON.stringify(state);

      localStorage.setItem("http://localhost:state", serializedState);
    } catch (err) {}
  }

  initializeState() {
    return {};
  }
}

const stateLoader = new StateLoader();

const store = configureStore({
  preloadedState: stateLoader.loadState(),
  reducer: {
    profile: profileSlice,
  },
});

store.subscribe(() => {
  stateLoader.saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
