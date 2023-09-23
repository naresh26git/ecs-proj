'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Full Page Background Image</title><style>body{margin:0;padding:0;background:#000 url(\'https://i.pinimg.com/originals/67/b2/a9/67b2a9ba5e85822f237caae92111e938.gif\')no-repeat fixed;background-size:cover;background-position:center;background-attachment:fixed;color:#fff;font-family:Arial,sans-serif;}.content{text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}.content h1{font-size:36px;margin-bottom:20px;}.content p{font-size:18px;}</style></head><body><div class="content"></div></body></html>  ');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
