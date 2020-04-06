/* TypeScript file generated from index.re by genType. */
/* eslint-disable import/first */


import {createGreeting as createGreetingNotChecked} from 'helloWorld';

// In case of type error, check the type of 'createGreeting' in 'index.re' and 'helloWorld'.
export const createGreetingTypeChecked: (_1:string) => string = createGreetingNotChecked;

// Export 'createGreeting' early to allow circular import from the '.bs.js' file.
export const createGreeting: unknown = createGreetingTypeChecked as (_1:string) => string;
