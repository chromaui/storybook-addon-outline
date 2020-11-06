import React, { useState, memo } from 'react';
import { Icons, IconButton } from '@storybook/components';

export const OutlineSelector = memo(() => {
  const [outline, setOutline] = useState(false);
  const toggleOutline = () => setOutline(!outline);

  return (
    <IconButton
      key="outline"
      title="Apply outlines to the preview"
      onClick={toggleOutline}
    >
      <Icons icon="outline" />
    </IconButton>
  );
});
