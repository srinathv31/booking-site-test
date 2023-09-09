import BookingButton from "@/components/BookingButton";
import Link from "next/link";

async function getBookings() {
  const res = await fetch("http://localhost:3000/v1/booking/add", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
}

export default async function Home() {
  const bookings = await getBookings();

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="m-2 p-2">
        <h1 className="text-4xl">Welcome</h1>
        <div className="my-4">
          <Link href={"/book"} className="bg-orange-400 p-2 rounded">
            Click here to schedule a time
          </Link>
        </div>
      </div>
      {/* {bookings.data.event_types.map((event: any) => {
        if (event.hidden) {
          return;
        }

        return <p key={event.id}>{event.title}</p>;
      })} */}
    </main>
  );
}
