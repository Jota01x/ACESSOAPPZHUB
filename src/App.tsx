/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import AccessGate from './components/AccessGate';
import Dashboard from './components/Dashboard';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user was already logged in this session
  useEffect(() => {
    const authStatus = sessionStorage.getItem('appzhub_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('appzhub_auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('appzhub_auth');
  };

  return (
    <Dashboard onLogout={handleLogout} />
  );
}
