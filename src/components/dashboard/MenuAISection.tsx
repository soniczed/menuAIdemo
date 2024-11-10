import React from 'react';
import { useSubscription } from '../../hooks/useSubscription';
import LockedFeature from './LockedFeature';

export default function MenuAISection() {
  const { hasSubscription } = useSubscription();

  if (!hasSubscription) {
    return (
      <div className="max-w-2xl mx-auto py-12">
        <LockedFeature
          title="MenuAI"
          description="Chat with your menu, manage orders, and provide instant customer service."
        />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">MenuAI</h1>
      {/* MenuAI content when unlocked */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <p className="text-gray-600">
          Your MenuAI features are now unlocked. Start managing your menu and customer interactions.
        </p>
      </div>
    </div>
  );
}