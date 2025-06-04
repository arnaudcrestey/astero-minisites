function validateBirthDate(dob) {
  return /^\d{4}-\d{2}-\d{2}$/.test(dob);
}

function assertValidBirthDate(dob) {
  if (!validateBirthDate(dob)) {
    throw new Error('invalid_dob');
  }
}

function assertRequired(value, name) {
  if (!value) {
    throw new Error(`${name}_required`);
  }
}

module.exports = { validateBirthDate, assertValidBirthDate, assertRequired };
