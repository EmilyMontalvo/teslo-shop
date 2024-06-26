This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Description 
E-commerce Tesla shop

## Steps
1. Clone repository
2. Copy ```.env.template``` file and rename to ```.env```
3. Change environment variables
4. Install dependencies ```npm install```

## Configure docker
5. Validate docker ```docker --version```
6. Data base up 5.  ```docker compose up -d```

## Install Prisma
7. Install the Prisma CLI as a development dependency ```npm install prisma --save-dev```
8. Set up Prisma ORM ```npx prisma init --datasource-provider PostgreSQL```
### Optional if you have an existing db
- Run ```prisma db pull``` to turn your database schema into a Prisma schema.

9. Run ```npx prisma generate``` to generate the Prisma Client.
10. Add the models to your ```schema.prisma```
11. Create the SQLite database ```npx prisma migrate dev --name migrationName```
12. Run ```npx prisma generate``` to generate the Prisma Client.

## Seed
13. Execute seed ```npm run seed```


## Run proyect
7.  ```npm run dev``

## Learn More

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
