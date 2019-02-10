let express = require("express");
let app = express();

/* serves main page */
app.get("/", function(req, res) {
    res.sendfile('./app/index.html')
});

// app.post("/user/add", function(req, res) { 
// /* some server side logic */
//     res.send("OK");
// });

const port = process.env.PORT || 5000;
const contextPath = "/api";



var apiRouter = express.Router();

apiRouter.get('/info', function(req, res) { 
    res.send("Info");
});

app.use(contextPath, apiRouter);
app.listen(port, function() {
    console.log("Listening on " + port);
});
