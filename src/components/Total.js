import { useTotal } from "../context/Total";
import Input from "./Input";
export default function () {
    const total = useTotal();

    return (
        <>
            <div>
                <div className="text-xl">Total</div>
                {total.total}
            </div>

            <div>
                <div className="text-xl">Tax(18%)</div>
                {(total.total * 18) / 100}
            </div>
            <div>
                <div className="text-xl">Grand Total</div>
                {total.total + (total.total * 18) / 100}
            </div>
            <Input
                attr={{
                    type: "button",
                    value: "Print",
                    className: "bg-blue-500 text-white",
                    onClick: () => {
                        window.print();
                    },
                }}
            ></Input>
        </>
    );
}
