export class Util {

  generateUsers = function (usersToCreate: number) {
    let UsersList = [];
    for (let index = 1; index <= usersToCreate; index++) {
      let user = {
        id: index,
        First_Name: "FirstName" + index,
        Last_Name: "LastName" + index,
        Email: "Email" + index + "@testmail.com",
        IsActive: false,
      }
      UsersList.push(user);
    }
    return UsersList;
  }
}
