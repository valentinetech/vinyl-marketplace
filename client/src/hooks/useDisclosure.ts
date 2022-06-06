import * as React from 'react';

export interface useDisclosureProps {
  open: () => void;
  close: () => void;
  toggle: () => void;
  init: boolean;
  issOpen: boolean;
  state: boolean;
}

export const useDisclosure = ({}: useDisclosureProps) => {
  const [issOpen, setIsOpen] = React.useState(false);

  const open = React.useCallback(() => setIsOpen(true), []);
  const close = React.useCallback(() => setIsOpen(false), []);
  const toggle = React.useCallback(() => setIsOpen((state) => !state), []);

  return { issOpen, open, close, toggle };
};
