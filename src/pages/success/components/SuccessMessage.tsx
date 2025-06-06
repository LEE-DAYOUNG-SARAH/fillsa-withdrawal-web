function SuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-10 sm:mt-[106px] mb-[20px]">
      <img src="/success.png" alt="Success Icon" className="w-[36px] h-[36px]" />
      <h1 className="font-pretendard font-bold text-[20px] leading-[30px] text-center text-[#212121]">
        탈퇴가 완료되었습니다.
      </h1>
    </div>
  );
}

export default SuccessMessage;