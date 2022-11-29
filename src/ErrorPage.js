import Container from "react-bootstrap/Container";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  //console.error(error);

  return (
    <Container>
      <h1 className="text-center fs-1 mt-5">Oops!</h1>
      <p className="text-center">Sorry, an unexpected error has occurred.</p>
      <p className="text-center text-danger">
        Technical Details: <i>{error.statusText || error.message}</i>
      </p>
    </Container>
  );
}
