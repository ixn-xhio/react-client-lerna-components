import { JSX as StencilJSX } from 'xhio-codes-shared-components/dist/types/components';
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements extends StencilJSX.IntrinsicElements  {

    }
  }
}