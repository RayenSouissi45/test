import UpGreenIcon from "../icons/upGreenIcon";

function Increase({percentNumber}) {
    return (
        <div className="bg-white w-18 h-6 mb-20 ml-6 mr-2 rounded-md text-green-400 flex flex-row">
                <UpGreenIcon/>
                  <p className=" p-1 text-xs">{percentNumber}%</p>
                </div>
    )
}
export default Increase ;