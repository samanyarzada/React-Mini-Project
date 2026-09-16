import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

export default function App() {
  return (
    <div className=" min-h-screen bg-slate-100">
      <Header />
      <main id="courses" className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3 ">
        <Card
          title="Web Development"
          description="Build useful websites"
          imageUrl="/2.jpg"
        />
        <Card
          title="Web Development"
          description="Build useful websites"
          imageUrl="/4.jpg"
        />
        <Card
          title="Web Development"
          description="Build useful websites"
          imageUrl="/3.png"
        />
      </main>
      <Footer />
    </div>
  );
}
