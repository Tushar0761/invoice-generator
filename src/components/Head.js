import { useState } from "react";
import Input from "./Input";
import InvoiceDetails from "./InvoiceDetails";

export default function () {
    const [seller, setSeller] = useState("");
    const [buyer, setBuyer] = useState("");
    const [shipping, setShipping] = useState("");

    return (
        <>
            <h1 class="text-end text-4xl"> Invoice</h1>
            <div className="flex">
                <div>
                    <Input
                        attr={{
                            type: "text",
                            placeholder: "Who is this invoice From ?",
                            value: seller,
                            onChange: (e) => {
                                setSeller(e.target.value);
                            },
                        }}
                    ></Input>
                    <div className="flex *:w-1/2">
                        <div>
                            Bill To
                            <br />
                            <Input
                                attr={{
                                    placeholder: "Who is this invoice to?",
                                    type: "text",
                                    value: buyer,
                                    onChange: (e) => {
                                        setBuyer(e.target.value);
                                    },
                                }}
                            ></Input>
                        </div>
                        <div>
                            Ship To
                            <Input
                                attr={{
                                    placeholder: "optional",
                                    type: "text",
                                    value: shipping,
                                    onChange: (e) => {
                                        setShipping(e.target.value);
                                    },
                                }}
                            ></Input>
                        </div>
                    </div>
                </div>
                <InvoiceDetails />
            </div>
        </>
    );
}
