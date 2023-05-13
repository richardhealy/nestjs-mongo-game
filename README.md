# NestJs Basic User Cookie Auth

### Setup

```
### Mongo DB
docker-compose up -d

### NestJs
cd be
npm install
npm run start:dev

### React FE
cd fe
npm install
npm run start:dev
```

### Assumptions

- I feel like the data is structured in a way that could be optimised. Personally
  I see there is a bunch of data that is could be broken down into different
  collections and a bunch of optimisations that could speed things up.
  I would probably want to move this sort of data to something a relational
  as it's seems the data is quite interelated. If I had more time, I would
  break the data down into Postgres.
- I followed the spec, but I probably would have liked to have a conversation
  about the endpoints as there are some conflicting ones i.e. `operator/:operatorId`
  and `operator/types`. Also, we should pluralize the entities i.e. `operator` vs
  `operators`
- Unique Players. I added a $group to the players aggregate as I thought it would
  be good to only pull unique player data from the player documents. I decided against
  it as it wasn't ask for in the spec and I didn't know 100% how the data would be
  consumed.

```
  {
    $group: {
      _id: '$dfsSlatePlayers.playerId',
      details: { $first: '$dfsSlatePlayers' },
    },
  },
  {
    $replaceRoot: {
      newRoot: '$details',
    },
  },
```

-
