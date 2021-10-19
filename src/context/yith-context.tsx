import React from "react";
import { Vault } from "@hyperion-framework/vault";

interface YithContextStore {
  expanded: boolean;
  sequences: Array<any>;
  vault: Vault;
}

interface YithAction {
  type: string;
  expanded: boolean;
  sequences: Array<any>;
}

const defaultState: YithContextStore = {
  expanded: false,
  sequences: [],
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
    case "updateSequences": {
      return {
        ...state,
        sequences: action.sequences,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

interface YithProviderProps {
  sequence: Array<any>;
  initialState?: YithContextStore;
  children: React.ReactNode;
}

const YithProvider: React.FC<YithProviderProps> = ({
  sequence,
  initialState = defaultState,
  children,
}) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<YithContextStore, YithAction>
  >(yithReducer, initialState);

  if (
    state.sequences.filter(function (e) {
      return e.id === sequence.id;
    }).length === 0
  ) {
    state.sequences.push(sequence);
  }

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
