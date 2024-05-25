import { type } from "@testing-library/user-event/dist/type";
import Input from "./Input";

export default function (props) {
    return (
        <>
            <div className="flex">
                <Input
                    attr={{
                        placeholder: "Product Name",
                        className: "w-full ",
                        value: props.product.title,
                        onChange: (e) => {
                            props.changeProduct(
                                props.index,
                                "title",
                                e.target.value
                            );
                        },
                    }}
                />
                <Input
                    attr={{
                        type: "number",
                        placeholder: "Quantity",

                        className: "w-1/6 ",
                        value: props.product.quantity,
                        onChange: (e) => {
                            props.changeProduct(
                                props.index,
                                "quantity",
                                Number(e.target.value)
                            );
                        },
                    }}
                />
                <Input
                    attr={{
                        type: "number",

                        placeholder: "Rate",
                        className: "w-1/6 ",
                        value: props.product.rate,
                        onChange: (e) => {
                            props.changeProduct(
                                props.index,
                                "rate",
                                Number(e.target.value)
                            );
                        },
                    }}
                />
                <h1 className="w-1/6">{props.product.amount}</h1>
            </div>
        </>
    );
}
