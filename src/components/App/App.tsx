import { Info } from "../info/info";
import { Display } from "../display/display";
import { Actions } from "../Actions/actions";
import { Keyboard } from "../keyboard/keyboard";

export function App() {
  return (
    <>
      <div className="container">
        <Info></Info>
        <main className="phone">
          <Display></Display>
          <Actions></Actions>
          <Keyboard></Keyboard>
        </main>
      </div>
    </>
  );
}
