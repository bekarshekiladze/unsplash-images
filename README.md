## Unsplash Images

A small case-study project demonstrating how to combine **React Query**, **Axios**, and **React Context** to build a searchable image gallery using the Unsplash API.

### Tech Stack

- React 18 (Vite)
- @tanstack/react-query
- Axios
- React Context API
- React Icons
- React Toastify

### What this project demonstrates

- State management with React Query
- Axios instance configration
- Sharing UI state (theme, search input) via React Contexts
- Splitting state into different Contexts avoids not needed renders
- Error and Loading state handling

### Environment

```sh
$ node -v
v24.13.0
```

### Getting Started

```sh
npm install
npm run dev
```
> Requires `.env` file with an Unsplash API access key

```code
VITE_UNSPLASH_ACCESS_KEY={your_key}
```

### Links

[Live Site](https://unsplash-images-react-18.netlify.app/)

