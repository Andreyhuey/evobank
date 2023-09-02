import { useRouteError } from "react-router-dom";

interface CustomError {
  statusText: string;
  message: string;
}

export default function ErrorPage() {
  const error = useRouteError() as CustomError;
  console.error(error);

  return (
    <div
      id="error-page"
      className="min-h-screen flex items-center justify-center flex-col gap-5 text-3xl"
    >
      <h1 className="font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="italic">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
