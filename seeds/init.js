exports.seed = async knex => {
  await knex('persons').del()
  await knex('persons').insert([
    {id: 1, name: 'Jack'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Tom'},
  ])
  await knex('friends').del()
  await knex('friends').insert([
    {id: 1, personId: 1, friendId: 2},
    {id: 2, personId: 2, friendId: 1},
  ])
  await knex('posts').del()
  await knex('posts').insert([
    {id: 1, ownerId: 1, title: 'Food at the bar', body: 'This is the body of the post.'},
  ])
}