'use client';
import { useEffect } from 'react';
import useFluidCursor from '@/components/useFluidCursor';

const FluidCursor = () => {
  useEffect(() => {
    useFluidCursor();
  }, []);

  return (
    <div className='fixed top-0 left-0 z-1 pointer-events-none'>
      <canvas id='fluid' className='w-screen h-screen ' />
    </div>
  );
};
export default FluidCursor;
