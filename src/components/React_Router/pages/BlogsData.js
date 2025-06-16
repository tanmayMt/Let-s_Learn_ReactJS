const BlogsData = [
  {
    id: "1",
    title: "React Basics",
    body: "React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can change data, without reloading the page. Its main goal is to be fast, scalable, and simple. It works only on user interfaces in the application. React can be used with a combination of other JavaScript libraries or frameworks, such as Redux, Axios, or Next.js, to create full-featured front-end applications.",
  },
  {
    id: "2",
    title: "React Router",
    body: "React Router enables dynamic routing in a React application. It allows you to navigate between different components, change the browser URL, and keep the UI in sync with the URL. It supports nested routes, lazy loading, route parameters, and protected routes. The core components include <BrowserRouter>, <Routes>, <Route>, <Link>, <NavLink>, and hooks like useNavigate and useParams. It's essential for creating Single Page Applications (SPAs).",
  },
  {
    id: "3",
    title: "useEffect Hook",
    body: "The useEffect hook lets you perform side effects in functional components. Common use cases include fetching data from an API, subscribing to services, or manually changing the DOM. It runs after the first render and after every update unless a dependency array is provided. You can control when it runs by passing dependencies, and even clean up resources like event listeners or intervals by returning a cleanup function from useEffect.",
  },
];

export default BlogsData;

