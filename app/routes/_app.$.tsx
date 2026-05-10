import { data, Link } from "react-router";

// Ensure search engines get a real 404 status code
export async function loader() {
  return data(null, { status: 404 });
}

export default function Page() {
  return (
    <main>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
      <Link to="/" viewTransition>
        Go back home
      </Link>
    </main>
  );
}
