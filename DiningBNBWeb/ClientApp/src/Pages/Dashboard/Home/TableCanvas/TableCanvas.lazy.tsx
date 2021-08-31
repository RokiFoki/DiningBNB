import React, { lazy, Suspense } from 'react';
import { TableCanvasProps } from './TableCanvas';

const LazyTableCanvas = lazy(() => import('./TableCanvas'));

const TableCanvas = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & TableCanvasProps) => (
  <Suspense fallback={null}>
    <LazyTableCanvas {...props} />
  </Suspense>
);

export default TableCanvas;
