/**Estructura principal de la pagina */
import FooterWidget from "../widgets/FooterWidget";
import NavbarWidget from "../widgets/NavbarWidget";

const MainLayout = ({ children }) => {
    return (
        <>
            <NavbarWidget />
            <main>
                {children}
            </main>
            <FooterWidget/>
        </>

    );
};

export default MainLayout;
