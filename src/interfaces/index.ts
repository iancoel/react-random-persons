export interface IUser {
  name: string;
  age: number;
}

export interface IActionUsers {
  type: string;
  payload: IUser[];
}

export interface IActionName {
  type: string;
  payload: string;
}

export interface IActionAge {
  type: string;
  payload: number;
}

export interface IActionRemoveFilter {
  type: string;
}

export interface IStoreUsers {
  allUsers: IUser[];
  filteredUsers: IUser[];
}
