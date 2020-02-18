from User import ConnectedUser
import Utils.Utils as utils


connectedUser = ConnectedUser("Lionnel",
                              "Lionnel Afan")


print("User :", connectedUser.toJSON())
print("Token : ", utils.get_token())
