"use client";

import { useParams } from "next/navigation";

function BlogDetailsPage() {
  const { id } = useParams();
  return <div>Blog Number {id}</div>;
}

export default BlogDetailsPage;
