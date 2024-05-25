import Input from "./Input";

export default function () {
    return (
        <>
            <div className="*:flex *:my-2  *:*:mx-2 ">
                <div className="">
                    <h1>Date</h1>
                    <Input attr={{ type: "date" }} />
                </div>
                <div className=" ">
                    <h1>Payment term</h1>
                    <Input attr={{ type: "text" }} />
                </div>

                <div className=" ">
                    <h1>Due Date</h1>
                    <Input attr={{ type: "date" }} />
                </div>
                <div className=" ">
                    <h1>PO no</h1>
                    <Input attr={{ type: "text" }} />
                </div>
            </div>
        </>
    );
}
