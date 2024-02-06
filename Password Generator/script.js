function generatePassword() {
  const length = document.getElementById("length").value;
  const uppercase = document.getElementById("uppercase").checked;
  const lowercase = document.getElementById("lowercase").checked;
  const numbers = document.getElementById("numbers").checked;
  const symbols = document.getElementById("symbols").checked;

  const charset = generateCharset(uppercase, lowercase, numbers, symbols);
  const password = generateRandomPassword(length, charset);

  document.getElementById("password").value = password;
}

function generateCharset(uppercase, lowercase, numbers, symbols) {
  let charset = "";

  if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) charset += "0123456789";
  if (symbols) charset += "!@#$%^&*()_-+=<>?/";

  return charset;
}

function generateRandomPassword(length, charset) {
  let password = "";
  const charsetLength = charset.length; // including chracters length

  for (let i = 0; i < length; i++) {
    // Generate each character of the password randomly from the character set
    const randomIndex = Math.floor(Math.random() * charsetLength);
    password += charset.charAt(randomIndex);
  }

  return password;
}
