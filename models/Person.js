const { Model } = require('objection')

class Person extends Model {
  static get tableName() {
    return 'persons'
  }

  static get relationMappings() {
    const { Post } = require('./Post')

    return {
      posts: {
        relation: Model.HasManyRelation,
        modelClass: Post,
        join: {
          from: 'persons.id',
          to: 'posts.ownerId',
        },
      }
    }
  }
}

module.exports = {
  Person
}