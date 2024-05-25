import ProductDetails from "./ProductDetails";
import Input from "./Input";
import { useState } from "react";
import { useTotal } from "../context/Total";
export default function () {
    const { total, setTotal } = useTotal();
    const [productsArray, setProductsArray] = useState([
        { title: "", quantity: "", rate: "", amount: 0 },
    ]);

    function addProduct() {
        setProductsArray((prevState) => {
            return [
                ...prevState,
                { title: "", quantity: "", rate: "", amount: 0 },
            ];
        });
    }

    function calculateTotal() {
        let totalAmount = productsArray.reduce((a, b) => {
            return a + b.amount;
        }, 0);
        console.log("total changed", totalAmount);
        setTotal(totalAmount);
    }

    function editProduct(index, field, value) {
        productsArray[index][field] = value;
        productsArray[index].amount =
            productsArray[index].quantity * productsArray[index].rate;
        setProductsArray(() => [...productsArray]);
        calculateTotal();
    }
    return (
        <>
            <div
                className=" rounded ps-3 
            py-2 bg-blue-950 text-white flex  "
            >
                <div className="w-full">Item</div>
                <div className="w-1/6">Quantity</div>
                <div className="w-1/6">Rate</div>
                <div className="w-1/6">Amount</div>
            </div>
            <div className="*:my-2">
                {productsArray.map((product, index) => (
                    <ProductDetails
                        product={product}
                        index={index}
                        changeProduct={editProduct}
                    />
                ))}
                <Input
                    attr={{
                        type: "button",
                        value: "Add new",
                        className: "bg-blue-500 text-white",
                        onClick: addProduct,
                    }}
                ></Input>
            </div>
        </>
    );
}
