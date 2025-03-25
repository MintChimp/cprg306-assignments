'use client';

import React from 'react';
import Link from 'next/link';
import { useUserAuth } from './_utils/auth-context';

export default function HomePage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      {!user ? (
        <div>
          <h1>Welcome to the App</h1>
          <button onClick={handleLogin}>Login with GitHub</button>
        </div>
      ) : (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleLogout}>Logout</button>
          <br />
          <Link href="/week-9/shopping-list">Go to Shopping List</Link>
        </div>
      )}
    </main>
  );
}
