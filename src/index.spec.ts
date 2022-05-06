import digitalTimeToWords from '.';

it('should print time converted to words', () => {
  expect(digitalTimeToWords('1:00')).toEqual("one o'clock");

  expect(digitalTimeToWords('12:00')).toEqual('noon');

  expect(digitalTimeToWords('00:00')).toEqual('midnight');

  expect(digitalTimeToWords('6:25')).toEqual('twenty five past six');

  expect(digitalTimeToWords('9:45')).toEqual('quarter to ten');

  // write additional tests here:
});
