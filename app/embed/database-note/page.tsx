export default function DatabaseNote() {
  return (
    <div className="status-callout">
      <div className="status-callout-body">
        <span className="status-callout-label">how this page works</span>
        <strong>Command has its own database.</strong>
        <div className="status-callout-message">
          Every row above is a genuine Command record — priority, status, and a formula explaining why it
          surfaced — related back to whichever Projects, Papers, Positions, Sessions, or Threads record
          triggered it. Editing a relation follows through to the source record; editing priority or status
          changes only Command&apos;s own queue.
        </div>
      </div>
    </div>
  );
}
