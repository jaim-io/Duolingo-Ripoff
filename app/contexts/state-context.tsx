"use client";

import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { Entity } from "../types/domain";

type StateContextType = {
  state: Entity[];
  setState: Dispatch<SetStateAction<Entity[]>>;
};

const StateContextDefaultValues: StateContextType = {
  state: [],
  setState: () => {},
};

const StateContext = createContext<StateContextType>(StateContextDefaultValues);

type StateProviderProps = {
  children: ReactNode;
};

export const StateProvider = ({ children }: StateProviderProps) => {
  const [state, setState] = useState<Entity[]>([]);
  const value = {
    state,
    setState,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export default StateContext;
