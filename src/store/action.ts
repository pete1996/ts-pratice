export enum ActionEnum {
  UPDATE_NAME = "UPDATE_NAME",
  SET_ADMIN = "SET_ADMIN",
}

export interface IAction {
  actionType: ActionEnum;
  payload: any;
}
