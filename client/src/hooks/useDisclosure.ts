import * as React from 'react';

export interface useDisclosureProps {
  open: () => void;
  close: () => void;
  toggle: () => void;
  isOpen: boolean;
  state: boolean;
  initial: boolean;
}

export const useDisclosure = ({ initial = false }: useDisclosureProps) => {
  const [isOpen, setIsOpen] = React.useState(initial);

  const open = React.useCallback(() => setIsOpen(true), []);
  const close = React.useCallback(() => setIsOpen(false), []);
  const toggle = React.useCallback(() => setIsOpen((state) => !state), []);

  return { isOpen, open, close, toggle };
};
