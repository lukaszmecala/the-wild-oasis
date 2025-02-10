import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  padding: 16px 32px;
  background-color: yellow;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Chceck in out</Heading>
        <Button onClick={() => alert("Click me")}> Click Me!</Button>
        <Input type="text" placeholder="test" />
        <Heading as="h3">Some text</Heading>
      </StyledApp>
    </>
  );
}

export default App;
