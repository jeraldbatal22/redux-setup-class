import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootMiddleware from './root_middleware';
import RootReducer from './root_reducer';
// import jwt_decode from "jwt-decode";

//Solution to save user permission on browser refresh.

// let userPermissions = null;
// const localStorageValue = localStorage.getItem('permissionsToken');

// if(localStorageValue) {
// 	userPermissions = jwt_decode(localStorageValue).permissions;
// }

// const preloadedState = {
// 	user: {
// 		user: JSON.parse(localStorage.getItem('user')),
// 		token: JSON.parse(localStorage.getItem('token'))
//   	},
// 	roles: {
// 		userPermissions 
// 	}
// };


const store = createStore(
  RootReducer,
  {},
  composeWithDevTools(RootMiddleware)
);

export default store;