import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank';
import Status from './pages/status';
import Calendar from './pages/calendar';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Blank />} />
                    <Route path='/status' element={<Status />} />
                    <Route path='/calendar' element={<Calendar />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
