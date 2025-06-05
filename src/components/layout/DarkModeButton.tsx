import { useContext } from 'react';
import { Sun, Moon } from 'lucide-react';
import Theme from '@/context/ThemeContext.tsx';

const DarkModeButton = () => {
    const { theme, setTheme } = useContext(Theme);

    return (
        <button
            className="text-yellow-300"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {theme === 'dark' ? <Moon /> : <Sun />}
        </button>
    );
};

export default DarkModeButton;
