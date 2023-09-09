export default function BookingPage(): JSX.Element {
  return (
    <main>
      <h1 className="text-4xl">Welcome</h1>
      <iframe
        src="https://app.acuityscheduling.com/schedule.php?owner=30185665"
        title="Schedule Appointment"
        width="100%"
        height="800"
      ></iframe>
    </main>
  );
}
