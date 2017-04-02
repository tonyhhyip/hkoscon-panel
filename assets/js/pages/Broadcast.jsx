//@flow
import React from 'react';
import BroadcastForm from '../containers/BroadcastForm';
import BroadcastTable from '../containers/BroadcastTable';

export default function Broadcast() {
  return (
    <div>
      <BroadcastForm />
      <BroadcastTable />
    </div>
  );
}
