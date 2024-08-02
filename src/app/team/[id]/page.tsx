import React from "react";

export default function TeamDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <p>TeamDetailPage {id}</p>;
}
