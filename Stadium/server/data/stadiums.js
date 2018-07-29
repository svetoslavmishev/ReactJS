let stadiums = {}


module.exports = {
  total: () => Object.keys(stadiums).length,
  save: (stadium) => {
    const id = Object.keys(stadiums).length + 1
    stadium.id = id

    let newStadium = {
      id: stadium.id,
      creator: stadium.creator,
      name: stadium.name,
      location: stadium.location,
      description: stadium.description,
      seats: stadium.seats,
      image: stadium.image,
      createdOn: new Date(),
      reviews: []
    }

    if (stadium.metroLine) {
      newStadium.metroLine = stadium.metroLine
    }

    stadiums[id] = newStadium
  },
  all: (page) => {
    const pageSize = 5

    let startIndex = (page - 1) * pageSize
    let endIndex = startIndex + pageSize

    return Object
      .keys(stadiums)
      .map(key => stadiums[key])
      .sort((a, b) => b.id - a.id)
      .slice(startIndex, endIndex)
  },
  findById: (id) => {
    return stadiums[id]
  },
  addReview: (id, comment, user) => {
    const review = {
      comment,
      user,
      createdOn: new Date()
    }

    stadiums[id].reviews.push(review)
  },
  allReviews: (id) => {
    return stadiums[id]
      .reviews
      .sort((a, b) => b.createdOn - a.createdOn)
      .slice(0)
  },
  byUser: (user) => {
    return Object
      .keys(stadiums)
      .map(key => stadiums[key])
      .filter(stadium => stadium.creator === user)
      .sort((a, b) => b.id - a.id)
  },
  delete: (id) => {
    delete stadiums[id]
  },
  update: (stadium, body, id) => {

    let newStadium = {
      id,
      creator: stadium.creator,
      name: body.name,
      location: body.location,
      description: body.description,
      seats: body.seats,
      image: body.image,
      metroLine: body.metroLine,
      createdOn: stadium.createdOn,
      reviews: stadium.reviews
    }

    if (stadium.metroLine) {
      newStadium.metroLine = body.metroLine
    }

    stadiums[id] = newStadium
    return newStadium
  }
}
