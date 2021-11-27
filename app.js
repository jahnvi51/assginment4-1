const express = require('express');
const app = express();
app.use(express.json());
const port = 4000;

const productRoute = require("./routes/product1");
const sellerRoute = require("./routes/seller1");
const companyRoute = require("./routes/company1");



app.get('/', (req, res) => res.send('Product Management APIs (EXPRESS)'));

app.use("/product", productRoute);
app.use("/seller", sellerRoute);
app.use("/company", companyRoute);



app.listen(port, () => console.log(`Example app listening on port `+ port +`!`));
