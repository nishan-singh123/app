This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



# NextJS
- React Framework
- For building Web applications
- Full-stack framework
- Opinionated framework

## Features
- UI Building
- Rendering
    - Server side rendering (SSR)
    - Client side rendering (CSR)
    - Static site generation (SSG)
- Optimization
- Routing - File based routing
- API routes
- Data fetching
- Styling

## Component types
- Server component (By default)
- Client component

1. Server component: Server side tasks like data fetching, file read, database data fetching, async tasks

2. Client component: Exactly react component, hooks, events, user interaction

## NextJS Routing

- File/folder based routing
- All routes must be inside the `/app` directory
- Every route must have `page.js` or `page.tsx` file
- `page.js`/`page.tsx` file must have a default export component

1. Simple route
- Create a folder inside `/app` directory
- Create a `page.js` file inside this folder.
- Add a default export component

2. Nested route
- `/courses/frontend/react`
- `/courses/frontend/vue`
- `/courses/backend/laravel`
- `/courses/backend/node-express`

3. Dynamic route
- Create a folder enclosed by [] -> `/products/[id]`
- Route: `/products/:id`

4. Nested dynamic route
- Route:` /products/:id/reviews/:reviewId`
- Folder structure: `/products/[id]/reviews/[reviewId]`

5. Catch all segments
- `/news/general/political/congress`
- `/news/general/education/universities/tu/ioe/bct`
- `/news/general/education/board/see`
- `/news/weather`
- `/news/sports/football/men`
- `/news/sports/tennis/women`
- `/news/sports/cricket/t20/men`
- Folder structure: `/news/[...slug]`

6. Route groups
- Route: `/login`, `/register`
- But it should be inside `/auth` folder
- Name the `/auth` folder as `(auth)`

7. Private folders
- `/_<folder_name>` -> `/_components`

8. Not found route/page
- `app/not-found.js`

## NextJS files

**Note: The file names listed below should be exactly the same.**

- page.js (Routing)
- not-found.js (Not found page)
- layout.js / layout.tsx
- loading.js

### Nested layout
- Use layout inside a route

## params and searchParams
- params: dynamic route parameter (id), page.js & layout.js
- searchParams: query parameter (?q=test), available only on page.js

## Metadata

- Metadata api is used to define metadata of page
- Can be used in page.js/layout.js
- Useful for SEO
- Static: metadata
- Dynamic: generateMetadata

## Auth

Credentials -> Login -> token (API) -> Store locally in browser (local storage) 
If token -> User is logged in -> Use this token in API request
Else -> User is not logged in

### Storage

1. Local storage
   - Size: 5MB
   - Available only on browser
   - Data is stored forever

2. Session storage
   - Size: 5MB
   - Available only on browser
   - Data is cleared on tab close

3. Cookie storage
   - Size: 4KB
   - Available on browser & server
   - Data is stored permanently, with expiry date

## HTTP Requests

- Hypertext transfer protocol

- GET: Fetch data (Read)
- POST: Create data (Create)
- PUT: Update data (Update)
- DELETE: Delete data (Delete)
- PATCH: Partial update

## Global state management (Redux)

The 3 core concepts of redux:

1. Store: Stores state data, one and only one store, to maintain single source of truth

2. Action: Function that is dispatched on user interaction/event trigger/api call to change state

3. Reducer: Binds store and action, stores the state data, responsible for UI transition

Thunk action
Async redux action
==============================================

File hierarchy
Rendering
=============================================

Product management
Cart
Order
Payment => Khalti, Stripe
Order management
Profile
Forgot password/Reset password
Product details
User management
Dashboard
Other pages (Home, contact, about)

