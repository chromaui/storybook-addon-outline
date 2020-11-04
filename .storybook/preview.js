import { withOutline } from '../src/withOutline';

export const decorators = [withOutline];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
