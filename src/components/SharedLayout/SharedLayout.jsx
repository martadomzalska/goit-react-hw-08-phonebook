import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import css from './SharedLayout.module.css'

function SharedLayout() {
  return (
    <div className={css.container}>
      <AppBar></AppBar>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;
