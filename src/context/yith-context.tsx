import React from "react";
import { Vault } from "@hyperion-framework/vault";

interface YithContextStore {
  expanded: boolean;
  vault: Vault;
}

interface YithAction {
  expanded: boolean;
}

const defaultState: YithContextStore = {
  expanded: false,
  vault: new Vault(),
};

const YithStateContext = React.createContext<YithContextStore>(defaultState);
const YithDispatchContext = React.createContext<YithContextStore>(defaultState);

function yithReducer(state: YithContextStore, action: YithAction) {
  switch (action.type) {
    case "updateModal": {
      return {
        ...state,
        expanded: action.expanded,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

interface YithProviderProps {
  initialState?: YithContextStore;
  children: React.ReactNode;
}

const YithProvider: React.FC<YithProviderProps> = ({
  initialState = defaultState,
  children,
}) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<YithContextStore, YithAction>
  >(yithReducer, initialState);

  return (
    <YithStateContext.Provider value={state}>
      <YithDispatchContext.Provider
        value={dispatch as unknown as YithContextStore}
      >
        {children}
      </YithDispatchContext.Provider>
    </YithStateContext.Provider>
  );
};

function useYithState() {
  const context = React.useContext(YithStateContext);
  if (context === undefined) {
    throw new Error("useYithState must be used within a YithProvider");
  }
  return context;
}

function useYithDispatch() {
  const context = React.useContext(YithDispatchContext);
  if (context === undefined) {
    throw new Error("useYithDispatch must be used within a YithProvider");
  }
  return context;
}

export { YithProvider, useYithState, useYithDispatch };
