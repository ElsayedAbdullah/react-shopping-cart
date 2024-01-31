import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Container } from "react-bootstrap";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default RootLayout;
