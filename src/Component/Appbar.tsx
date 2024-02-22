import Bracnchselect from "./Branch";
import CurrentDate from "./CurTime";

function Appbar() {
  return (
    <div className="grid grid-cols-7 gap-4 items-center  bg-white">
      <h3 className=" font-bold text-center">PETER EXCHANGE</h3>
      <div className="">
        <Bracnchselect />
      </div>
      <div className="">
        <CurrentDate />
      </div>
      <div className="text-xs">เงินต้น</div>
      <div className="text-xs">เงินคงเหลือ</div>
      <div className="text-xs text-center w-full bg-sky-100 p-2 rounded-md">
        แก้ไขเงินต้น
      </div>
      <div className="text-xs text-center w-8/12 bg-red-100 p-2 rounded-md">
        ล้างทั้งหมด
      </div>
    </div>
  );
}

export default Appbar;
