import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="section-eyebrow mb-3">404</p>
      <h1 className="section-title">Page not found</h1>
      <p className="section-copy mt-4 mx-auto">
        The page you requested does not exist.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </main>
  );
}
