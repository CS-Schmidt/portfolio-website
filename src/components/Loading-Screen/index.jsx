import React, { useState } from 'react';
import GridLoader from 'react-spinners/GridLoader';

export default function LoadingScreen() {
  const [isLoading, setLoading] = useState(true);
  return (
    <div id="loading-screen">
      <GridLoader loading={isLoading} color="#ef7a26" />
    </div>
  );
}
