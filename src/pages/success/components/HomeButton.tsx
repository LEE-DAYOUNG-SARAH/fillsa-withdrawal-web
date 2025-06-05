function HomeButton() {
  const handleClick = () => {
    window.location.replace(import.meta.env.VITE_HOME_URL);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#5C65FF] text-[#FFF7E6] text-[14px] font-bold leading-[21px] h-[50px] w-[320px] rounded-[100px] flex items-center justify-center align-middle gap-2 mt-[137px]"
    >
      <img src="/home.png" alt="Home Ico" className="w-[30px] h-[30px]" />
      홈으로 가기
    </button>
  );
}

export default HomeButton;