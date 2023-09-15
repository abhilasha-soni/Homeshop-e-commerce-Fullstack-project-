import React from 'react'
import Privacy from '../components/privacy/Privacy';
import Security from '../components/privacy/Security';

export default function PrivacyPolicy() {
  return (
    <div
      style={{
        marginTop: 180,
        padding: 50,
        backgroundColor: " rgb(255, 189, 89)",
      }}
    >
      <Privacy />
      <Security />
    </div>
  );
}
