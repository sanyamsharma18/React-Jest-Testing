const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

const actualFullName = getFullName("Sanyam", "Sharma");

const expectedFullName = "Sanyam Sharma";

if (actualFullName !== expectedFullName) {
  throw new Error(`${actualFullName} is not Equal to the ${expectedFullName}`);
}
