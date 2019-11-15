const required = (value) => value ? undefined : 'Oops, this field is required.';

const isNumber = (value) => {
  const regex = /^\d+|\d{1,3}(?:\.\d{3})*$/;
  return value && regex.test(value) ? undefined : 'Oops, only numbers are allowed.';
};

const onlyNumber = (value) => {
  const regex = /^\d+$/;
  return value && regex.test(value) ? undefined : 'Oops, only numbers are allowed.';
};

const getNumberFromString = (input) => {
  const val = getOnlyDigits(input);
  return val && Number(val);
};

const eligibleAges = (value) => {
  return value && getNumberFromString(value) < 1 ? 'Oops, age must be larger than or equal to 1' : undefined;
};

export {
  required,
  isNumber,
  onlyNumber,
  eligibleAges,
};

