/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
// eslint-disable import/first
/* eslint-disable import/first */

global.window = {};

import 'mock-local-storage';

window.localStorage = global.localStorage;
