//modules used.
const http = require("http");
const url = require("url");
const fs = require("fs");
const iconvlite = require('iconv-lite');
const crypto = require('crypto');
//const LanguageDetect = require('languagedetect');
//const lngDetector = new LanguageDetect(); 
//const utf8 = require('utf8');
//const express = require('express'), lingua  = require('lingua');

const server = http.createServer((req, res) => {
  //handle the request and send back a static file
  //from a folder called `public`
  let parsedURL = url.parse(req.url, true);
  //remove the leading and trailing slashes
  let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
  /**
   *  /
   *  /BBC.html
   *
   *  /main.css
   *  /bbc-logo.png
   */
  if (path == "") {
    path = "Web-2020/user-reg.html";
  }
  console.log(`Requested path ${path} `);


//npm i mime-types
const lookup = require("mime-types").lookup;
  let file = __dirname +  + path;
  //async read file function uses callback
  fs.readFile(file,'utf8',function(err, content) {
    if (err) {
      console.log(`File Not Found ${file}`);
      res.writeHead(404);
      res.end();
    } else {
      //specify the content type in the response
      console.log(`Returning ${path}`);
      res.setHeader("X-Content-Type-Options", "nosniff");
      let mime = lookup(path);
      res.writeHead(200, { "Content-type": mime });
      // switch (path) {
      //   case "main.css":
      //     res.writeHead(200, { "Content-type": "text/css" });
      //     break;
      //   case "main.js":
      //     res.writeHead(200, { "Content-type": "application/javascript" });
      //     break;
      //   case "index.html":
      //     res.writeHead(200, { "Content-type": "text/html" });
      // }
      res.end(content);
    }
  });
});

server.listen(5000, "localhost", () => {
  console.log("Listening on port 5000");
});