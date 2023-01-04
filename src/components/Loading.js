import React from 'react';
import { LoadingBar } from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className="loading">
      <LoadingBar style={{ backgroundColor: 'blue', height: '5px' }} />
    </div>
  );
}

export default Loading;
