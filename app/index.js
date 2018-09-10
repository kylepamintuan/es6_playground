import addToDom from './add_to_dom';
import * as math from './math';

addToDom('h2', `52 - 10 = ${math.subtract(52, 10)}`);
addToDom('h2', `52 + 10 = ${math.add(52, 10)}`);
addToDom('h2', `52 * 10 = ${math.multiply(52, 10)}`);
addToDom('h2', `52 / 10 = ${math.divide(52, 10)}`);
