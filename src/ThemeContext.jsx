import { createContext, useReducer } from "react";
  // @ts-ignore
  const ThemeContexttt = createContext();
 
 const initialData = { theme: localStorage.getItem("theme")===null?"light":localStorage.getItem("theme")}
 const reducer = (firstState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...firstState, theme: action.newValue };
    default:
      return firstState;
  }}
   
  
  export function ThemeProvider({ children }) {
    const [firstState, dispatch] = useReducer(reducer, initialData);
    const chanegTheme = (toggelTheme) => {
      localStorage.setItem("theme",toggelTheme)
      // @ts-ignore
      dispatch({ type: "CHANGE_THEME", newValue: toggelTheme });
    };
  
  
    return (
       <ThemeContexttt.Provider value={{ ...firstState, chanegTheme }}>
        {children}
       </ThemeContexttt.Provider>
    );
  }
  
  export default ThemeContexttt;