import { IUser } from '../interfaces';

const INITIAL_STATE: IUser[] = [];

//actions está tipada como any pois na actions.ts elas já estão tipadas e caso pusesse IActionAge | IActionName | IActionUsers daria conflito no return de ADICIONAR_TODOS_USUARIOS
const users = (state = INITIAL_STATE, action: any): IUser[] => {
  switch (action.type) {
    case 'ADICIONAR_TODOS_USUARIOS':
      return action.payload;
    case 'FILTRAR_NOME':
      return state.filter((usuario) => usuario.name === action.payload);
    case 'FILTRAR_IDADE':
      return state.filter((usuario) => usuario.age === action.payload);
    default:
      return state;
  }
};

export default users;
