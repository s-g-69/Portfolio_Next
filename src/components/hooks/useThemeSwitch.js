import React, { useEffect, useState } from 'react';

const useThemeSwitch = () => {
    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode, setMode] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userPref = window.localStorage.getItem("theme");
            const mediaQuery = window.matchMedia(preferDarkQuery);
            const currentMode = userPref || (mediaQuery.matches ? "dark" : "light");
            setMode(currentMode);

            if (currentMode === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }

            const handleChange = () => {
                const newMode = mediaQuery.matches ? "dark" : "light";
                setMode(newMode);
                if (newMode === "dark") {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            };

            mediaQuery.addEventListener("change", handleChange);
            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, []);

    useEffect(() => {
        if (mode !== null && typeof window !== "undefined") {
            if (mode === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            window.localStorage.setItem("theme", mode);
        }
    }, [mode]);

    return [mode, setMode];
};

export default useThemeSwitch;