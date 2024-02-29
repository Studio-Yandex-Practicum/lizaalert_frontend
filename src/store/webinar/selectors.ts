/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { AppState } from '../types';

export const selectWebinar = (state: AppState) => state.webinar.webinar;
