import {createContext, useContext} from 'react';

const Theme = createContext({
    theme: 'dark',
    setTheme: (_theme: string) => {},
});

export default Theme;
export const useTheme = () => useContext(Theme);
