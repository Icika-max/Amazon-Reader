import bookReducer from './feature/books/bookslice';
import orderReducer from './feature/orders/orderslice';
import lendingsReducer from './feature/lendings/lendingslice'
import myAccountsReducer from './feature/myAccount/myAccountTable'
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer: {
      // books: bookReducer,
      books: bookReducer,
      orders: orderReducer,
      lendings: lendingsReducer,
      // myAccount: myAccountsReducer
      
    
    },
  });
  export default store;