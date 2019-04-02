import {assert} from 'chai';
import {getComputerChoice, convertToWord} from './util';

describe(`getComputerChoice function check`, () => {

  it(`Return value must be a string`, () => {
    assert.isNotString(getComputerChoice() === `string`);
  });

  it(`Return only 1 element`, () => {
    assert.lengthOf(getComputerChoice(), 1, `Return only 1 element`);
  });

  it(`Return right value from array`, () => {
    assert.oneOf(getComputerChoice(), [`r`, `p`, `s`], `Return value contain one of element [\`r\`, \`p\`, \`s\`]`);
  });

});


describe(`convertToWord function check`, () => {

  it(`Return value must be a string`, () => {
    assert.typeOf(convertToWord(), `string`);
  });

});
