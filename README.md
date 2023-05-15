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

- I followed the spec, but I prob eact, TypesScript with Tailwind and SWR. It felt like
  the better fit for this project as I don't think Next is required for what we wanted
  to achieve in the specs
- On Components, though I could of atomized a bunch of components like Selects and Buttons
  I felt like as the project is was small enough, it's nice to sometimes lean on Tailwind.
  I think I would buiild out a Button component, but I'm always dubious to build form
  components, because they usually have extra context baked into them, which I don't
  think is a good DX (i.e. integrating Formik / React Form into a Select atom, makes it
  hard to use in another context. i.e a Search / Filter.). IIf I was to spend more
  time on the project, I would break components down further.
- Tests. As this was quite big test project, I added a couple of tests in the FE. I'm using
  MSW to capture requests to the the api, making it easy to mock. In a live project
  I would get to 80%+ patch coverage. You can see an example project here of
  how I integrate tests in my work: https://github.com/richardhealy/ld-flags-nest-api
