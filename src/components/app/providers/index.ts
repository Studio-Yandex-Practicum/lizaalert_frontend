import { compose } from '@reduxjs/toolkit';
import { withStore } from './withStore';

export const withProviders = compose(withStore);
