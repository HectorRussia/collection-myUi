import { ThemeContext } from 'hooks/useTheme';
import { useEffect, useState } from 'react'
import { ChildrenProps } from 'src/models/theme';

export const ThemeProvider = ( { children } : ChildrenProps ) => {

    const [theme, setTheme] = useState<"light" | "dark">('light');

    useEffect(() => {
        
        const storedTheme = localStorage.getItem('theme') as "light" | "dark" | null;
        if (storedTheme) {
            setTheme(storedTheme); 
        } else {
            localStorage.setItem('theme start', theme); 
        }
    }, []); 
    
    useEffect(() => {
        console.log('Theme applied:', theme); 
        document.documentElement.classList.toggle('dark', theme === 'dark'); 
        localStorage.setItem('theme', theme); 
    }, [theme]); 

    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
}

