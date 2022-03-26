import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <p>Header is consistent to most of the pages, so we dont reload it.</p>
      <Outlet />
    </div>
  );
}

export default Layout;
