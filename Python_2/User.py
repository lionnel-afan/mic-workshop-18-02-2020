import json
#  import JSONEncoder


class ConnectedUser:
    Username = ""
    Name = ""
    IsActive = 1
    IP = ""
    Token = ""

    def __init__(self, username="default", name="default"):
        self.Username = username
        self.Name = name
        self.IsActive = 1

    def toJSON(self):
        return json.dumps(self,
                          default=lambda o: o.__dict__,
                          sort_keys=True,
                          indent=4)
