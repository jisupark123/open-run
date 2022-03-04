import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FloatingApply from '../components/FloatingApply';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import Home from '../screens/Home';
import Intro from '../screens/Intro';
import LogoScreen from '../screens/LogoScreen';
import Qna from '../screens/Qna';
import Survice from '../screens/Survice';
import { HandleUrlChange } from '../utility';

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <HandleUrlChange />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/survice' element={<Survice />} />
        <Route path='/qna' element={<Qna />} />
        <Route path='/logo' element={<LogoScreen />} />
        <Route element={<NotFound />} />
      </Routes>
      <FloatingApply />
      <Footer />
    </BrowserRouter>
  );
}
