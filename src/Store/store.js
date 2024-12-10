import { createStore, combineReducers } from 'redux';

// Reducer для логотипу
const logoReducer = (state = { logoPath: './images.png' }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Reducer для меню
const menuReducer = (state = { menuItems: [
  { text: "Головна", url: "/" },
  { text: "Про нас", url: "/about" },
  { text: "Послуги", url: "/services" },
  { text: "Контакти", url: "/contacts" },
] }, action) => {
  switch (action.type) {
    case 'SET_MENU_ITEMS':
      return { ...state, menuItems: action.payload };
    default:
      return state;
  }
};

// Reducer для дати
const dateReducer = (state = { date: new Date() }, action) => {
  switch (action.type) {
    case 'UPDATE_DATE':
      return { ...state, date: action.payload };
    default:
      return state;
  }
};

// Комбінування редюсерів
const rootReducer = combineReducers({
  logo: logoReducer,
  menu: menuReducer,
  date: dateReducer,
});

// Створення сховища
const store = createStore(rootReducer);

export default store;