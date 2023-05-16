import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";

export default function Layout(props) {
  return (
    <>
      <div className="whole-container">
        <Navbar />
        <main style={{}}>{props.children}</main>
      </div>
    </>
  );
}
