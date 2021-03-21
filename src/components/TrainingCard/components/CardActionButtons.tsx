import React, { useState } from 'react';
import { Button } from '@ui-kitten/components';
import { Icon } from '../../Icon';
import { IconSize, IconType, Colors } from '../../../constants';

export const CardActionButtons = () => {
  const [isPressSettings, setPressSettings] = useState(false);
  const [isPressPlay, setPressPlay] = useState(false);

  return (
    <>
      <Button
        onPressIn={() => setPressSettings(true)}
        onPressOut={() => setPressSettings(false)}
        appearance='ghost'
        accessoryLeft={() => (
          <Icon
            color={isPressSettings ? Colors.blue : Colors.lightGray}
            type={IconType.Settings}
            size={IconSize.Big}
          />
        )}
      />
      <Button
        onPressIn={() => setPressPlay(true)}
        onPressOut={() => setPressPlay(false)}
        appearance='ghost'
        accessoryLeft={() => (
          <Icon
            color={isPressPlay ? Colors.blue : Colors.lightGray}
            type={IconType.Play}
            size={IconSize.Big}
          />
        )}
      />
    </>
  );
};
