import React from "react"

const defaultTheme = 'beachWave';


export const Theme = React.createContext(defaultTheme);

console.log("Theme is", Theme);
