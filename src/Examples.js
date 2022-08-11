import createContext from 'react';

import { FirstComponent } from './FirstComponent';
import { SecondComponent } from './SecondComponent';
import { ThirdComponent } from './ThirdComponent';

export const Examples = () => {
  const MyContext = createContext('');

  return (
    <>
      <MyContext.Provider>
        <FirstComponent />
        <SecondComponent />
      </MyContext.Provider>
      <ThirdComponent />
    </>
  );
};
