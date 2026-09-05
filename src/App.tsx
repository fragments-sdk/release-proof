import { Button } from "./components/Button";

export function App() {
  return (
    <main style={{ padding: "var(--fui-space-4)" }}>
      <h1>Release proof</h1>
      <p>Every action in this app goes through the canonical Button.</p>
      <Button onClick={() => undefined}>Save</Button>
    </main>
  );
}
