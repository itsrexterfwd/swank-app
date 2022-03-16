import { useEffect, useState } from 'react';

export const useIsLoggedIn = () => {
  const [token, setToken] = useState(undefined);

  return [token, setToken];
};
