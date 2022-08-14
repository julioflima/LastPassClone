<p align="center">
	<h1 align="center">
    <span>LastPass Clone  ✂️ 📋</span>
  </h1>
</p>
<p align="center">
    <img src="https://user-images.githubusercontent.com/17098382/133039368-a98cccb1-8f96-46fb-a697-20975d2a4828.png" width="100" alt="Logo">
</p>



## PREVIEW
https://user-images.githubusercontent.com/17098382/133042338-5358e9e3-2413-45f7-973b-4a2df98528c0.mp4


## Getting Started
  - First, please intall the Yarn


  - Second, run the local project:
  ```bash
  bash run.sh
  ```

## Back End

<p align="justify">
To not expose the enviroment secrets to call the backend of <a href="https://developers.themoviedb.org/4/getting-started/authorization">TMDB API</a>, was used Serverless Functions that the NextJS provide to use.
<p align="justify">
By this way, every page called is generated on backend, so no "env" is exposed and in case of some call to api happening in frontend gonna be call a Serverless Function available on <strong><i>/api/*</i></strong>.
</p>
<p align="justify">
The <a href="https://nextjs.org/docs/api-routes/introduction">API routes</a> can be accessed on <a href="http://localhost:3000/api/favorites">http://localhost:3000/api/favorites</a>. This endpoint can be edited in <strong><i>pages/api/favorites.ts</i></strong>.
</p>
<p align="justify">
The <strong><i>pages/api</i></strong> directory is mapped to <strong><i>/api/*</i></strong>. Files in this directory are treated as <a href="https://nextjs.org/docs/api-routes/introduction">API routes</a> instead of React pages.
</p>

## Front End

<p align="justify">
The aplication was developed in NextJS using the most possible otimizations tha the NextJS provides, follow in below more. This aplication has a good responsivity, but that part is not completed (just missed the header to be more responsive, in this version was really easy and fast to implement it).
</p>
<p align="justify">
Open <a href="http://localhost:3000">http://localhost:3000</a> with your browser to see the result.
<p align="justify">
</p>
You can start editing the page by modifying <strong><i>pages/index.tsx</i></strong>. The page auto-updates as you edit the file.
</p>

### NextJS:

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

## Referece to Clone:
Here is an overview of LastPass: https://www.youtube.com/watch?v=a86PbT5XZt8  
• Please review these two things in the video to keep this simple: 
1.  At 26 seconds into the video – note the cards on the screen  - one card for each application or website with the user specified name visible.  
2.  At 30 seconds - card contents: URL, Name, Folder, Username, Password, and Notes.

