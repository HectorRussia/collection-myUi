
import { ThemeContext } from '@/hooks/useTheme';
import { ChildrenProps } from '@/models/theme';
import { useEffect, useState } from 'react'

export const ThemeProvider = ( { children } : ChildrenProps ) => {

    const [theme, setTheme] = useState<"garden" | "dark">('garden');

    useEffect(() => {
        
        const storedTheme = localStorage.getItem('theme') as "garden" | "dark" | null;
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

