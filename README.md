# NestJs Basic User Cookie Auth

### Setup

```
### Install
cd be
docker-compose up --build -d
cp .env.template .env
npm install
cd ../fe
cp .env.template .env
npm install

### BE Start
cd be
npm run start:dev

### React FE
cd fe
npm run dev
```

### Assumptions and Notes

- I followed the spec, but I probably would have liked to have a conversation
  about the endpoints as there are some conflicting ones i.e. `operator/:operatorId`
  and `operator/types`. Also, we should pluralize the entities i.e. `operator` vs
  `operators`
- If I had more time, I would have narrowed the types on any Mongoose calls. Currently
  the types return `any` for results, which I don't particularly like.
- FE end I went for pure Vite, React, TypesScript with Tailwind and SWR. It felt like
  the better fit for this project as I don't think Next is required for what we wanted
  to achieve in the specs
