export default function (props) {
    return (
        <input
            {...props.attr}
            className={`border border-gray-400 px-2 py-1 rounded  mx-1  ${props.attr.className}`}
        ></input>
    );
}
