import { applyMiddleware } from 'redux';

import logger from './logger';
import checkInNotice from './checkInNotice';
export default applyMiddleware(logger, checkInNotice);