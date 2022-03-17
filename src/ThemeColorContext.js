import React, { useState, useEffect, createContext } from 'react'

const ThemeColorContext = createContext()

const mainColors = [
    { backgroundColor: '#000', color: '#fff' },
    { backgroundColor: '#fff', color: '#0d0d0d'}
]

const ThemeColorProvider = ({ children }) => {
    const [turnOn, setTurnOn] = useState(true)
    const [mainColor, setMainColor] = useState(mainColors[0])

    useEffect(() => {
        const color = turnOn ? mainColors[0] : mainColors[1] 
        setMainColor(color)
    }, [turnOn])

  return (
    <ThemeColorContext.Provider value={{ turnOn, setTurnOn, mainColor, setMainColor }}>
        { children }
    </ThemeColorContext.Provider>
  )
}

export { ThemeColorContext, ThemeColorProvider }
