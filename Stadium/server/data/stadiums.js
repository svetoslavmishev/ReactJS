let stadiums = {}

module.exports = {
  save: (stadium) => {
    const id = Object.keys(stadiums).length + 1
    stadium.id = id

    let newStadium = {
      id: stadium.id,
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
  }
}
