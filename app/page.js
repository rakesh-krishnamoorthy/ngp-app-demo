import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">
        Welcome to NGP DevOps Demo
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        This project is designed for NGP College students to learn practical DevOps
        concepts like GitHub version control, pull requests, CI/CD pipelines, Docker,
        and cloud deployments on AWS.
      </p>

      <Link
        href="/students"
        className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-600 transition"
      >
        Go to Students Corner
      </Link>

      <div className="mt-16">
        <p className="text-gray-500 text-sm">
          Make changes, create pull requests, and see your updates live!
        </p>
      </div>
    </div>
  );
}
