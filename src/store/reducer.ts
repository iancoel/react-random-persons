import { IStoreUsers } from '../interfaces';

const INITIAL_STATE: IStoreUsers = {
  allUsers: [],
  filteredUsers: [],
};

//actions está tipada como any pois na actions.ts elas já estão tipadas e caso pusesse um type = IActionAge | IActionName | IActionUsers aqui daria conflito no return de ADICIONAR_TODOS_USUARIOS
const users = (state = INITIAL_STATE, action: any): IStoreUsers => {
  switch (action.type) {
    case 'ADICIONAR_TODOS_USUARIOS':
      return { ...state, allUsers: action.payload };
    case 'FILTRAR_NOME':
      return {
        ...state,
        filteredUsers: state.allUsers.filter(
          (usuario) => usuario.name === action.payload,
        ),
      };
    case 'FILTRAR_IDADE':
      return {
        ...state,
        filteredUsers: state.allUsers.filter(
          (usuario) => usuario.age === action.payload,
        ),
      };
    case 'REMOVER_FILTROS':
      return {
        ...state,
        filteredUsers: [],
      };
    default:
      return state;
  }
};

export default users;
