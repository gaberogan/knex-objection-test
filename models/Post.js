const { Model } = require('objection')

class Post extends Model {
  static get tableName() {
    return 'posts'
  }

  static get relationMappings() {
    const { Person } = require('./Person')

    return {
        owner: {
            relation: Model.BelongsToOneRelation,
            modelClass: Person,
            join: {
                from: 'posts.ownerId',
                to: 'persons.id',
            }
        }
    }
  }
}

module.exports = {
    Post
}