exports.up = async knex => {
    await knex.schema.createTable('persons', table => {
        table.increments().primary()

        table
        .text('name')
    }).createTable('friends', table => {
        table.increments().primary()

        table
        .integer('personId')
        .unsigned()
        .references('id')
        .inTable('persons')
        .onDelete('CASCADE')
        .index()

        table
        .integer('friendId')
        .unsigned()
        .references('id')
        .inTable('persons')
        .onDelete('CASCADE')
        .index()
    }).createTable('posts', table => {
        table.increments().primary()

        table
        .integer('ownerId')
        .unsigned()
        .references('id')
        .inTable('persons')
        .onDelete('CASCADE')
        .index()

        table
        .text('title')
        
        table
        .text('body')
    })
}

exports.down = async knex => {
    await knex.raw('drop table persons, friends, posts')
}