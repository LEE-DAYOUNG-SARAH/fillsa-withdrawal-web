import { useNavigate } from "react-router-dom";

function BackHomeButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/", { replace: true })}
      className="bg-[#5C65FF] text-[#FFF7E6] text-[14px] font-bold leading-[21px] h-[50px] w-[320px] rounded-[100px] flex items-center justify-center align-middle mt-[20px]"
    >
      <img src="/back.png" alt="Back Ico" className="w-[30px] h-[30px]" />
      처음으로 돌아가기
    </button>
  );
}

export default BackHomeButton;
