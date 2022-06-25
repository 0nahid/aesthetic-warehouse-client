import { HashLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center absolute top-0 left-0 backdrop-blur-[9px] z-50">
            <HashLoader size={55} color={"#ff11ff"} />
        </div>
    );
};

export default Loading;