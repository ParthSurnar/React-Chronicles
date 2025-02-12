// disabling right click 
import React from 'react';

export function useDisableRightClick() {
  React.useEffect(() => {
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
    };
    window.addEventListener("contextmenu", disableRightClick);
    return () => {
      window.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);
}