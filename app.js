let express = require("express");
let app = express();

const port = process.env.PORT || 5000;
const contextPath = "/api";

// The main page
app.get("/", function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
});

let apiRouter = express.Router();
apiRouter.get('/info', function(req, res) { 
    res.send({
        author: "Alexandr Chernov",
        version: "1.0.0"
    });
});

app.use(contextPath, apiRouter);
app.use(express.static("public"))
app.listen(port, function() {
    console.log("Listening on " + port);
});
