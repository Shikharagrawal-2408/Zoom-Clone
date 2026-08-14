// "use server"

// import { currentUser } from "@clerk/nextjs/server";


// const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
// const apiSecret = process.env.STREAM_SECRET_KEY;

// export const tokenProvider = async () => {
//     const user = await currentUser();

//     if(!user)
//         throw new Error ('User is not logged in');
//     if (!apiKey)
//         throw new Error ('No API key');

//     if(apiSecret)
//         throw new Error('No API Secret');

//     const streamClient = new streamClient
// }

"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error("User is not logged in");
  }

  if (!apiKey) {
    throw new Error("Stream API key is missing");
  }

  if (!apiSecret) {
    throw new Error("Stream API secret is missing");
  }

  const streamClient = new StreamClient(apiKey, apiSecret);

  const token = streamClient.generateUserToken({
    user_id: user.id,
    validity_in_seconds: 3600,
  });

  return token;
};