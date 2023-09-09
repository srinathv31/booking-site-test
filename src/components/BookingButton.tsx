"use client";

export default function BookingButton(): JSX.Element {
  return (
    <>
      {/* <button
        className="transition duration-300 border p-2 bg-orange-400 rounded hover:bg-orange-600 active:bg-orange-800"
        type="button"
      >
        CLICK FOR POGGERS
      </button> */}
      <iframe
        src="https://app.acuityscheduling.com/schedule.php?owner=30185665"
        title="Schedule Appointment"
        width="100%"
        height="800"
      ></iframe>
    </>
  );
}
