import Cryptr from "cryptr";

const cryptObj = new Cryptr("12345");
const text = '5160fb567f628b054bdf24453ce9180c327aae718e2d08e7311da242c92535d06fc3a11e3b4ec7b35844a0207783cf60a37657ffd82a68d993a943a30d4683cf501cd517179c0fcdaa8d315c1a5cb5f4d4b98391bfce3c43dd0b15274c5c23a218b3ffd60b'
 console.log(cryptObj.decrypt(text));