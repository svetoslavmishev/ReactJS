const usersById = {}
const usersByEmail = {}

module.exports = {
  total: () => Object.keys(usersById).length,
  save: (user) => {
    const id = Object.keys(usersById).length + 1
    user.id = id

    usersById[id] = user
    usersByEmail[user.email] = user
  },
  findByEmail: (email) => {
    return usersByEmail[email]
  },
  findById: (id) => {
    return usersById[id]
  },
  getAll: () => {
    return Object
      .keys(usersByEmail)
      .map(key => usersByEmail[key])
      .sort((a, b) => b.userEmail - a.userEmail)
  },
  //da se probva pak
  deleteUserById: (id) => {
    delete usersById[id]
  }
}
