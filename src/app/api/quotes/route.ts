import { NextResponse } from "next/server";

const GET = async () => {
  try {
    const response = await fetch(`${process.env.FAV_QS_API_URL}/quotes`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token token=${process.env.FAV_QS_API_KEY}`,
      },
    });
    const responseBody = await response.json();

    return NextResponse.json(responseBody, { status: response.status });
  } catch (err: any) {
    console.log("Error getting all quotes", err);

    const {
      response: {
        data: { error: { message = "Unexpected error ocurred", type = "" } = {} } = {},
        status = 500,
      } = {},
    } = err ?? {};

    return NextResponse.json({ error: `${type} : ${message}` }, { status });
  }
};

export { GET };
