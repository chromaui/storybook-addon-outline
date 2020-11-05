import { useMemo, useEffect } from '@storybook/addons';

import { clearStyles, addOutlineStyle } from './helpers';
import { PARAM_KEY as OUTLINE_PARAM_KEY } from './constants';
import outlineCSS from './outlineCSS';

export const withOutline = (StoryFn, context) => {
  const { globals } = context;
  const isActive = globals[OUTLINE_PARAM_KEY]?.outline === true;
  const isInDocs = context.viewMode === 'docs';

  const outlineStyles = useMemo(() => {
    const selector = isInDocs
      ? `#anchor--${context.id} .docs-story`
      : '.sb-show-main';

    return outlineCSS(selector);
  }, [context.id]);

  useEffect(() => {
    const selectorId = isInDocs
      ? `addon-outline-docs-${context.id}`
      : `addon-outline`;

    if (!isActive) {
      clearStyles(selectorId);
      return;
    }

    addOutlineStyle(selectorId, outlineStyles);

    return () => {
      clearStyles(selectorId);
    };
  }, [isActive, outlineStyles, context.id]);

  return StoryFn();
};
