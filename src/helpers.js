import { document } from 'global';

export const clearStyles = (selector) => {
  const selectors = Array.isArray(selector) ? selector : [selector];
  selectors.forEach(clearStyle);
};

const clearStyle = (selector) => {
  const element = document.getElementById(selector);
  if (element) {
    element.parentElement.removeChild(element);
  }
};

export const addOutlineStyle = (selector, css) => {
  const existingStyle = document.getElementById(selector);
  if (existingStyle) {
    if (existingStyle.innerHTML !== css) {
      existingStyle.innerHTML = css;
    }
  } else {
    const style = document.createElement('style');
    style.setAttribute('id', selector);
    style.innerHTML = css;
    document.head.appendChild(style);
  }
};

export const addBackgroundStyle = (selector, css, storyId) => {
  const existingStyle = document.getElementById(selector);
  if (existingStyle) {
    if (existingStyle.innerHTML !== css) {
      existingStyle.innerHTML = css;
    }
  } else {
    const style = document.createElement('style');
    style.setAttribute('id', selector);
    style.innerHTML = css;

    const gridStyleSelector = `addon-backgrounds-grid${
      storyId ? `-docs-${storyId}` : ''
    }`;
    // If grids already exist, we want to add the style tag BEFORE it so the background doesn't override grid
    const existingGridStyle = document.getElementById(gridStyleSelector);
    if (existingGridStyle) {
      existingGridStyle.parentElement.insertBefore(style, existingGridStyle);
    } else {
      document.head.appendChild(style);
    }
  }
};
