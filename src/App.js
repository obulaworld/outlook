import React, {useContext, useState} from 'react'
import Content from './components/Content/Content';
import {ThemeContext, themes} from './theme-context';

function App() {
  const [theme,setTheme] = useState(themes.light);

  const changeTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light)
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Content changeTheme={changeTheme}/>
    </ThemeContext.Provider>
  );
}

export default App;
