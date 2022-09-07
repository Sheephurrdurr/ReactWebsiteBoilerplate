// Components
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';

const Layout = ({children}) => {
    return (
        <>
        <header className="w-100 row">
            <div className="">
                <Nav />
            </div>  
        </header>

        <main className="container">
            {children}
        </main>

        <footer className="w-100 fixed-bottom">
            <Footer />
        </footer>  
        </>
    );
}

export default Layout;