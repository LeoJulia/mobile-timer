import React from 'react';
import { Icon } from '../../Icon';
import { IconSize, IconType } from '../../../constants';

export const CardActionButtons = () => (
  <>
    <Icon type={IconType.Settings} size={IconSize.Big} />
    <Icon type={IconType.Play} size={IconSize.Big} />
  </>
);
