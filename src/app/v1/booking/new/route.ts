import { NextResponse } from "next/server";

export async function POST() {
  console.log("POSTING");

  const event = {
    summary: "An example of an individual event type POST request",
    value: {
      title: "Hello World",
      slug: "hello-world",
      length: 30,
      hidden: false,
      position: 0,
      eventName: null,
      timeZone: null,
      scheduleId: 5,
      periodType: "UNLIMITED",
      periodStartDate: "2023-02-15T08:46:16.000Z",
      periodEndDate: "2023-0-15T08:46:16.000Z",
      periodDays: null,
      periodCountCalendarDays: false,
      requiresConfirmation: false,
      recurringEvent: null,
      disableGuests: false,
      hideCalendarNotes: false,
      minimumBookingNotice: 120,
      beforeEventBuffer: 0,
      afterEventBuffer: 0,
      price: 0,
      currency: "usd",
      slotInterval: null,
      successRedirectUrl: null,
      description: "A test event type",
      metadata: {
        apps: {
          stripe: {
            price: 0,
            enabled: false,
            currency: "usd",
          },
        },
      },
    },
  };

  const res = await fetch(
    "https://api.cal.com/v1/event-types/?apiKey=cal_live_c9986ad96eb2d7d26d5b6a491c96cc83",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    }
  );
  console.log("🚀 ~ file: route.ts:15 ~ GET ~ res:", res);
  //   const data = await res.json();

  return NextResponse.json({ msg: "success" });
}
