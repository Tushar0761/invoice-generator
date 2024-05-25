import "./App.css";
import Head from "./components/Head";
import ProductDetails from "./components/ProductDetails";
import ProductSection from "./components/ProductSection";
import Total from "./components/Total";
import { TotalProvider } from "./context/Total";

function App() {
    return (
        <TotalProvider>
            <div className="bg-slate-600 flex justify-center items-center h-screen px-7">
                <div className="bg-white m-3  p-3  w-screen">
                    <Head />
                    <ProductSection />
                    <Total />
                </div>
            </div>
        </TotalProvider>
    );
}

export default App;
