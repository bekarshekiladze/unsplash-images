## Unsplash Images

A small case-study project demonstrating how to combine **React Query**, **Axios**, and **React Context** to build a searchable image gallery using the Unsplash API.

### Tech Stack

- React 18 (Vite)
- @tanstack/react-query
- Axios
- React Context API
- React Icons
- React Toastify
- BlurHash

### What this project demonstrates

- Server state management with React Query
- Axios instance configration
- Sharing UI state (theme, search input) via React Contexts
- Splitting state into different Contexts to avoid unnecessary re-renders
- Error and Loading state handling
- Persistent theme control, with priority order:
  `Storage -> Device preference -> Light Theme <-> User toggle`
- Progressive image loading using **BlurHash**

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

```env
VITE_UNSPLASH_ACCESS_KEY={your_key}
```

### Links

[Live Site](https://unsplash-images-react-18.netlify.app/)
