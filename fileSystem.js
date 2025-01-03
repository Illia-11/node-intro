// імпорт модуля файлової системи з моди
import * as fs from 'fs/promises';

// console.log(fs);

// отримати текст з файлу readme.md та вивести його у консоль
const readmePromise = fs.readFile('./readme.md', 'utf-8', {encoding: 'utf-8'});

readmePromise.then((text) => {
  // console.log(text);
});

// додати до кінця файлу readme.md рядок "Тут була нода"
fs.readFile('./readme.md', 'utf-8').then((text) => {
    // const newText = `${text}\n"Тут була нода"`;
    // fs.writeFile('readme.md', newText, {encoding: 'utf-8'});
  });

fs.appendFile('./readme.md', `\n"Тут була Нода але аппендом"`, {
  encoding: 'utf-8'
});
