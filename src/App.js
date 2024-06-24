import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navber from './components/Navber';
import Fotter from './components/Fotter';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import EarnMoney from './pages/EarnMoney';
import ProfileHandelar from './pages/ProfileHandelar';
import EarnMoneyDisplay from './pages/EarnMoneyDisplay';
import AdminDashboard from './pages/AdminDashboard';
import UpdateProductsDisplay from './pages/UpdateProductsDisplay';
import DeleteProductsHandelars from './pages/DeleteProductsHandelars';
import UpdateUserDisplay from './pages/UpdateUserDisplay';
import DeleteUserDisplay from './pages/DeleteUserDisplay';
import BanUsersDisplay from './pages/BanUsersDisplay';
import UnbanDisplay from './pages/UnbanDisplay';
import PayoutsHandelar from './pages/PayoutsHandelar';
import UserVerifyLogin from './pages/UserVerifyLogin';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Error from './pages/Error';
import ContactUs from './pages/ContactUs';
import DeleteMsgs from './pages/DeleteMsgs';

function App() {
  //get data from session staorge

  return (
    <div>
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/api/users/reset-password/:token"
            element={<ResetPassword />}
          />
          <Route
            path="/api/users/activate/:token"
            element={<UserVerifyLogin />}
          />
          {sessionStorage.getItem('userData') ? (
            <Route path="/Dashboard" element={<Dashboard />} />
          ) : (
            <Route path="*" element={<Error />} />
          )}
          {sessionStorage.getItem('userData') ? (
            <Route path="/dashboard/earn-money" element={<EarnMoney />} />
          ) : (
            <Route path="*" element={<Error />} />
          )}
          {sessionStorage.getItem('userData') ? (
            <Route
              path="/dashboard/earn-money/:id"
              element={<EarnMoneyDisplay />}
            />
          ) : (
            <Route path="*" element={<Error />} />
          )}
          {sessionStorage.getItem('userData') ? (
            <Route path="/dashboard/profile" element={<ProfileHandelar />} />
          ) : (
            <Route path="*" element={<Error />} />
          )}
          {sessionStorage.getItem('userData') ? (
            <Route path="/dashboard/payouts" element={<PayoutsHandelar />} />
          ) : (
            <Route path="*" element={<Error />} />
          )}

          {sessionStorage.getItem('isAdmin') ? (
            <Route path="/admin" element={<AdminDashboard />} />
          ) : (
            <Route path="*" element={<Error />} />
          )}
          <Route path="/admin/:id" element={<UpdateProductsDisplay />} />
          <Route path="/admin/delete-message/:id" element={<DeleteMsgs />} />
          <Route
            path="/admin/delete/:id"
            element={<DeleteProductsHandelars />}
          />
          <Route
            path="/admin/updateUsers/:id"
            element={<UpdateUserDisplay />}
          />
          <Route path="/admin/deleteUser/:id" element={<DeleteUserDisplay />} />
          <Route path="/admin/ban-user/:id" element={<BanUsersDisplay />} />
          <Route path="/admin/unban-user/:id" element={<UnbanDisplay />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Fotter />
      </BrowserRouter>
    </div>
  );
}

export default App;
