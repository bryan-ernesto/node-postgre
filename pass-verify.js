const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$u792jR6eqrvivl1o4xfB.O5TgfPtvXdvbLaiZyKFHSUtRzq0HJ8BW';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
