import { ActionEnum, IAction } from "./action";

interface ICommonState {
  common: {
    name: string;
    isAdmin: boolean;
  };
}

const initialState = {
  common: {
    name: "kangkang",
    isAdmin: true,
  },
};

export function commonReducer(state: ICommonState, action: IAction): any {
  if (!state) {
    return initialState;
  }
  switch (action.actionType) {
    case ActionEnum.SET_ADMIN: {
      return { ...state, isAdmin: action.payload };
    }
    case ActionEnum.UPDATE_NAME: {
      return { ...state, name: action.payload };
    }
    default: {
      return { ...state };
    }
  }
}

export function S() {
  return {} as any;
}
