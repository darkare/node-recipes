const {Router} = require ('express');
const request = require('request');

const router = Router();

router.get('/', (req, res) => {
    const title = 'Express';
    res.send(
        `<html>
            <head>
                <title>${title}</title>
                <link rel="stylesheet" href="styles.css">
            </head>
            <body>
                <h1>${title}</h1>
                <p>Welcome to ${title} </p>

            </body>
        </html> `

    )
})

router.get('/pdf', (req, res) => {
    request('https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf',
    ).pipe(res);
    
})

module.exports = router;
// (err, response,body) => {
//     //res = response;
//     console.log(body);
//     res.setHeader('Content-type','application/pdf');
//     body.pipe(res);
//     //res.send(body);
// }