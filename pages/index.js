import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login"); // Chuyển hướng đến trang login
  }, []);

  return <p>Đang chuyển hướng...</p>;
}

