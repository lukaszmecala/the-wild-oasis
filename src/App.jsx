import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 16px 32px;
  background-color: yellow;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Chceck in out</Heading>
              <Button onClick={() => alert("Check in")}> Check in</Button>
              <Button
                variations="secondary"
                sizes="small"
                onClick={() => alert("Check out")}
              >
                {" "}
                Check out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Some text</Heading>
            <div>
              <Input type="text" placeholder="test" />
              <Input type="text" placeholder="Test" />
            </div>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
