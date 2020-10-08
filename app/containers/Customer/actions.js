/*
 *
 * Customer actions
 *
 */

import { LIST_MENU, POST_DATA, LIST_MENU_SUSSCESS } from './constants';

export function getMenu(menu) {
  return {
    type: LIST_MENU,
    payload: menu,
  };
}

export function getMenuSuccess(menu) {
  return {
    type: LIST_MENU_SUSSCESS,
    data: menu,
  };
}
