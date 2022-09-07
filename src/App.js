// Router
import { Route, Routes } from 'react-router-dom';

// Layout
import Layout from './layout/Layout';

// Pages
import Home from './pages/home/Home';


const App = () => {
    return (
        <>
        <Layout>
            <Routes>
                <Route path="/" element={ <Home /> } />
            </Routes>
        </Layout>
        </>
    );
}

export default App;