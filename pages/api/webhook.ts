import { NextApiRequest, NextApiResponse } from "next";
import { send } from "@ayshptk/msngr";

import { candypay } from "../../helpers";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const payload = req.body;

    switch (payload.event) {
      case "webhook.registered":
        await send(
          process.env.DISCORD_WEBHOOK_URL!,
          "🤖 The webhook has being registered."
        );

        break;
      case "transaction.successful":
        await send(
          process.env.DISCORD_WEBHOOK_URL!,
          "💸 A new payment has being made."
        );

        break;

      case "transaction.failed":
        await send(
          process.env.DISCORD_WEBHOOK_URL!,
          "😿 A payment transaction has being failed."
        );

        break;
    }

    return res.send({
      message: "Captured the event successfully",
    });
  } else {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }
};

export default handler;
