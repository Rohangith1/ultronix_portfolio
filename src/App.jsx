import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-stone-200 via-orange-50 to-slate-600 min-h-screen px-6 py-3 flex flex-col gap-16 ">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
