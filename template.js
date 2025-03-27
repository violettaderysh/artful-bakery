let express = require('express');
let app = express();
let ejs = require('ejs');
let path = require('path');


//setting view engine to ejs
app.set("view engine", "ejs");

// Define routes and their corresponding page information
const pages = {
    '/': {
        title: 'Artful Bakery',
        filename: "bakery"
    },
    '/bakery': {
        title: 'Artful Bakery',
        filename: "bakery"
    },
    '/cakes': {
        title: 'Artful Bakery - Cakes',
        filename: "cakes"
    },
	'/bento': {
        title: 'Artful Bakery - Bento Cakes',
        filename: "bento"
    },
	'/cookies': {
        title: 'Artful Bakery - Cookies',
        filename: "cookies"
    }
}

// console.log(Object.entries(pages));

// Dynamically create routes for each page
Object.entries(pages).forEach(([route, { title, filename }]) => {
    app.get(route, (req, res) => {
        res.render("template", { 
            title: title, // Pass the page title to the template
            page: filename, // Pass the filename (EJS page) to the template
            currentRoute: route // Pass the current route to highlight active menu item
        });
    });
});

app.use(express.static('public'));
app.listen(process.env.PORT || 3000);

