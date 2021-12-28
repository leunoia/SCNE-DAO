import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xcE4A0667c7df739F9228dc66FC4fa339443DA693",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "SCNE Membership Card",
        description: "This NFT will give you access to SCNE DAO!",
        image: readFileSync("scripts/assets/Membership_NFT.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()