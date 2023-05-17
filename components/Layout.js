import Navbar from "@/components/Navbar/Navbar";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <div className="whole-container">
        <main style={{}}>{props.children}</main>
      </div>
    </>
  );
}
