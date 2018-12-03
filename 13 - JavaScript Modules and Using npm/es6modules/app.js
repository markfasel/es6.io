import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey, url, sayHi } from './src/config';

import User, { createURL, gravater } from './src/user';

const mark = new User('Mark Fasel', 'markfasel@gmail.com', 'markfasel.com');
const profile = createURL(mark.name);
const image = gravatar(mark.email);

console.log(image);