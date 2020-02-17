var http = require("http");
var Chat = require("./modules/Chat");
var rndReply = require("./modules/wait-random");

var chatSession = new Chat();
const PORT = 8080;
console.log("Created the Chat Session");

//create a server object:
http
  .createServer(function(req, res) {
    var ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log("Processing user on IP : ", ip);

    // GetMessages
    if (req.url.indexOf("/GetMessages") != -1) {
      chatSession.GetMessages(res);
      res.end();
    }
    // Send Messages
    else if (req.url.indexOf("/SendMessage") != -1) {
      chatSession.appendMessage(req, res);
      res.end();
      // http://10.104.100.40:8080/
    } else {
      rndReply().then(function(data) {
        ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
        console.log("Done with user on IP : ", ip);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(
          JSON.stringify({
            rand: data,
            code: 200
          })
        );
        res.end();
      });
    }
  })
  .listen(PORT); //the server object listens on port 8080

console.log("Server launched on port : ", PORT);
