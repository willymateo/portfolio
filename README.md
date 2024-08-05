# portfolio

My personal dev-portfolio

## Environment variables

You must have a `.env.local` file in the `root` of the proyect. The `.env.local` file must have the content of [.env.template](https://github.com/willymateo/portfolio/blob/main/.env.template)

**Note**: Ask to an admin for the value of environment variables.

## Setup

### Install dependencies

```cmd
npm install
```

### Run server

#### Production

```cmd
npm run build
npm start
```

#### Development

```bash
npm run start:dev
# or
yarn start:dev
# or
pnpm start:dev
# or
bun start:dev
```

Open [http://localhost:3000](http://localhost:3000)
