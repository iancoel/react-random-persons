import {
  IUser,
  IActionAge,
  IActionName,
  IActionUsers,
  IActionRemoveFilter,
} from '../interfaces';

export const addAllUsers = (users: IUser[]): IActionUsers => {
  return {
    type: 'ADICIONAR_TODOS_USUARIOS',
    payload: users,
  };
};

export const filterByAge = (age: number): IActionAge => {
  return {
    type: 'FILTRAR_IDADE',
    payload: age,
  };
};

export const filterByName = (name: string): IActionName => {
  return {
    type: 'FILTRAR_NOME',
    payload: name,
  };
};

export const removeFiltering = (): IActionRemoveFilter => {
  return {
    type: 'REMOVER_FILTROS',
  };
};
