import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const isAuth = localStorage.getItem("auth");
    if (!isAuth && router.pathname !== "/login") {
      router.push("/login");
    }
  }, [router]);

  const showNavbar = router.pathname !== "/login";

  return (
    <>
      {showNavbar && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}
