/*
 *
 * Customer reducer
 *
 */
import produce from 'immer';
import { LIST_MENU_SUSSCESS, POST_DATA_SUSSCESS } from './constants';

export const initialState = {
  listMenu: [],
};

/* eslint-disable default-case, no-param-reassign */
const customerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LIST_MENU_SUSSCESS:
        draft.listMenu = action.listMenu;
        break;
    }
  });

export default customerReducer;
