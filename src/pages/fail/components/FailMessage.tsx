function FailMessage({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-10 sm:mt-[50px] mb-[20px]">
      <img src="/fail.png" alt="Fail Icon" className="w-[36px] h-[36px]" />
      <h1 className="font-pretendard font-bold text-[20px] leading-[30px] text-center text-[#212121]">
        {message}
      </h1>
    </div>
  );
}

export default FailMessage;