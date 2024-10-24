import { createContext, useEffect, useState } from "react";

const NavContext = createContext();

const NavProvider = ({ children }) => {
    const [coordsY, setCoordsY] = useState(0);
    const [sectionsCoords, setSectionsCoords] = useState({
        experience: 0,
        projects: 0,
        techs: 0,
        studies: 0,
    });

    const handleScroll = () => {
        setCoordsY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return (() => {
            window.removeEventListener('scroll', handleScroll)
        })
    }, [])


    return (
        <NavContext.Provider value={{ coordsY, setCoordsY, sectionsCoords, setSectionsCoords }}>
            {children}
        </NavContext.Provider>
    );
};

export default NavProvider;
export { NavContext }; 