import { Routes, Route } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Contacts from 'pages/Contacts';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
   const dispatch = useDispatch();
   const { isRefreshing } = useAuth();

   useEffect(() => {
     dispatch(refreshUser());
   }, [dispatch]);
  return isRefreshing ? (<p>Refreshing user...</p>):(
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/phonebook" component={<Login />} />
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute
                redirectTo="/phonebook"
                component={<Register />}
              />
            }
          />
          <Route
            path="/phonebook"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
// import { lazy } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { RestrictedRoute } from './RestrictedRoute';
// import { PrivateRoute } from './PrivateRoute';
// import { useAuth } from 'hooks/useAuth';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { refreshUser } from 'redux/auth/operations';
// import Home from 'pages/Home';
// // import Phonebook from 'pages/Phonebook';
// import Register from 'pages/Register';
// import Login from 'pages/Login';
// import Contacts from 'pages/Contacts/Contacts';
// // const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
// import SharedLayout from './SharedLayout/SharedLayout';

// export const App = () => {
//   const dispatch = useDispatch();
//   const { isRefreshing } = useAuth();

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <b>Refreshing user...</b>
//   ) : (
//     <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route index element={<Home />} />
//         <Route
//           path="/signup"
//           element={
//             <RestrictedRoute redirectTo="/phonebook" component={<Register />} />
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute redirectTo="/phonebook" component={<Login />} />
//           }
//         />
//         <Route
//           path="/phonebook"
//           element={
//             <PrivateRoute redirectTo="/login" component={<Contacts />} />
//           }
//         />
//       </Route>
//     </Routes>
//   );
// };
