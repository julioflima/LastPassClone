<h1 align="center">
    <span>LastPass Clone  ✂️ 📋</span>
</h1>

## Getting Started

#### Database

- First, enter in the database dir:

  ```bash
    cd database/
  ```

- First, run the database server:

    ```bash
    npm i && npm run dev
    # or
    yarn && yarn dev
    ```

#### Middle Step I

- Open a new terminal tab.


#### Frontend

- First, enter in the frontend dir:

  ```bash
    cd frontend/
  ```

- First, run the frontend server:

    ```bash
    npm i && npm run dev
    # or
    yarn && yarn dev
    ```

#### Middle Step II

- Open a new terminal tab.

#### Backend

- First, enter in the backend dir:

  ```bash
    cd backend/
  ```

- First, run the backend server:

    ```bash
    npm i && npm run dev
    # or
    yarn && yarn dev
    ```

## Documentation

## Postman

- Please see the file in ```backend/LastPassClone.postman_collection.json``` to get the postman documentation:

## Back End

<p align="justify">
To be easy to edit it was maintened the base url in a file  <strong>.env</strong>.
<p align="justify">
It was used the Express to do the calls of database, nothing much complex here. All validations are made in frontend part.</p>
<p align="justify">
The API routes</a> can be accessed on <a href="http://localhost:3333">http://localhost:3333</a>. All routes are described as well in the Postman.
</p>

## Front End

<p align="justify">
The aplication was developed in NextJS using the most possible otimizations tha the NextJS provides, follow in below more. This aplication has a ok responsivity, but that part is not the focus here (just missed more tests to be perfect due the time it was not possile).
</p>
<p align="justify">
Open <a href="http://localhost:3000">http://localhost:3000</a> with your browser to see the result.
<p align="justify">
</p>
You can start editing the page by modifying <strong><i>pages/index.tsx</i></strong>. The page auto-updates as you edit the file.
</p>

### NextJS

<p align="justify">
NextJS is the best nowadays framework for frontend, it provides the productivity of React with a lot of features that could improve a lot the SEO and by consequence the UX.
</p>
<p align="justify">
The most technologies that it provides that put Next at the top is the native SSG (Static Site Generation), inspired by the old PHP, so that are much less time of rendering, and if you need to rerender something you could do because Next is made in the base of CRA (Create React App). So we can build dynamic pages, being pre-rendered in build.
</p>
<p align="justify">
Another technology that Next provides is Image and Fonts optimization.
</p>
<p align="justify">
Is good to quote too the ISR (Incremental Static Regeneration), with you could generate on build some pages, but you could determine when they gonna be revalidated, and even generate pages that was not generated on the build, buy demand.
</p>

## Refereces:

Here is an overview of LastPass: https://www.youtube.com/watch?v=a86PbT5XZt8  
• Please review these two things in the video to keep this simple:
1.  At 26 seconds into the video – note the cards on the screen  - one card for each application or website with the user specified name visible.
2.  At 30 seconds - card contents: URL, Name, Folder, Username, Password, and Notes.
