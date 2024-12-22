const passwordRequirements = [
  { passed: false, message: "At least 10 Characters" },
  { passed: false, message: "At least 1 Uppercase letter" },
  { passed: false, message: "At least 1 Lowercase letter" },
  { passed: false, message: "At least 1 Special character" },
  { passed: false, message: "At least 1 Number" },
];

const confirmPasswodRequirements = [
  { passed: false, message: "Passwords must match" },
];

export { passwordRequirements, confirmPasswodRequirements };
