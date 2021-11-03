/** https://usehooks.com/usePrevious/ **/

import { useEffect, useRef } from 'react';
import type { MutableRefObject } from 'react';

export default function usePrevious<T>(value: T): MutableRefObject<T | undefined>['current'] {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef<T>();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}
