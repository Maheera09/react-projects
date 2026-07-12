import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./component/Container";
import DisplayCounter from "./component/DisplayCounter";
import Header from "./component/Header";
import Controls from "./component/Controls";
import { useSelector } from "react-redux";
import PrivacyMsg from "./component/PrivacyMsg.jsx";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <center>
      <Container>
        <Header />
        {privacy ? <PrivacyMsg /> : <DisplayCounter />}
        <Controls />
      </Container>
    </center>
  );
}

export default App;
