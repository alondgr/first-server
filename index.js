const http = require("http");
const fs = require('fs');



const home = fs.readFileSync('./home.html', { encoding: 'utf8' });
const about = fs.readFileSync('./about.html', { encoding: 'utf8' });
const contact = fs.readFileSync('./contact.html', { encoding: 'utf8' });
const error = fs.readFileSync('./error.html', { encoding: 'utf8' });


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(home);
        return;
    } else if (req.url === '/about') {
        res.end(about);
        return;
    } else if (req.url === '/contact') {
        res.end(contact);
        return;
    } else {
        res.statusCode = 404;
        res.end(error)
    }
});

server.listen(3001, () => {
    console.log('listening to 3001');
});