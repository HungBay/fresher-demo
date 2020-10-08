import React, { useEffect, useState } from 'react';
import routes from '../../containers/App/routes';
function useFilterMap(checkRole) {
  //filter
  const dataRoute = routes.filter(matchRoute => {
    return matchRoute.role.includes(checkRole);
  });
  return dataRoute;
}

export default useFilterMap;
