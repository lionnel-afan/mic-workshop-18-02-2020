var url = require("url");

// My custom message class
class Chat {
  // Here come my constructor
  constructor() {
    this.messages = [];
  }

  //   #### Add a new message
  appendMessage(request, response) {
    var q = url.parse(request.url, true).query;
    var message = q.message || request.message;

    if (message != null) {
      this.messages.push(message);
    }
    // Write headers
    response.writeHead(200, {
      "Content-Type": "application/json"
    });

    // Write the content
    response.write(
      JSON.stringify({
        error: "Done.",
        code: 200,
        data: this.messages
      })
    );
  }

  //   ##### Get the messages
  getMessages(response) {
    //   Write the headers
    response.writeHead(200, { "Content-Type": "application/json" });

    // Write the content
    response.write(
      JSON.stringify({
        data: messages,
        code: 200
      })
    );
    return this.messages;
  }
}

module.exports = Chat;
