// Release proof fixture: a raw <button> where Button is the canonical primitive.
// The deployed contract check must fail this head.
export function RawSaveButton() {
  return (
    <button type="button" onClick={() => undefined}>
      Save
    </button>
  );
}
