import { revalidatePath, revalidateTag } from "next/cache";
import React from "react";

export default function Revalidate() {
  // Revalidating test path
  revalidateTag("Todo");
  return <div>Revalidate</div>;
}
