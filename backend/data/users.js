import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'john',
    email: 'john@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'jack',
    email: 'jack@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
];

export default users;
