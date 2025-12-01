import { Checkbox as ArkCheckbox } from '@ark-ui/react/checkbox';

import { FC, ReactNode } from 'react';
import { LuCheck } from 'react-icons/lu';

export interface ICheckboxProps extends Partial<ArkCheckbox.RootProps> {
  children?: ReactNode;
  icon?: ReactNode;
}

export const Checkbox: FC<ICheckboxProps> = ({ children, icon, ...props }) => {
  return (
    <ArkCheckbox.Root {...props}>
      {children && <ArkCheckbox.Label>{children}</ArkCheckbox.Label>}
      <ArkCheckbox.Control>
        <ArkCheckbox.Indicator>{icon || <LuCheck />}</ArkCheckbox.Indicator>
      </ArkCheckbox.Control>
      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
  );
};
