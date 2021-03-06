const usersById = {
  "1": {
    id: "1",
    email: "admin@admin.bg",
    name: "admin",
    password: "admin"
  },
  "2": {
    id: "2",
    email: "ivan@abv.bg",
    name: "ivan",
    password: "ivan"
  }
}

const usersByEmail = {
  "admin@admin.bg": {
    id: "1",
    email: "admin@admin.bg",
    name: "admin",
    password: "admin"
  },
  "ivan@abv.bg": {
    id: "2",
    email: "ivan@abv.bg",
    name: "ivan",
    password: "ivan"
  }
}

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
      .keys(usersById)
      .map(key => usersById[key])
      .sort((a, b) => a.id - b.id)
  },
  deleteUser: (id, email) => {
    delete usersById[id]
    delete usersByEmail[email]
  },
  updateUser: (body, id, email) => {
    let newUser = {
      id,
      email: body.email,
      name: body.name,
      password: body.password
    }

    usersById[id] = newUser
    usersByEmail[email] = newUser
    return newUser;
  }
}
