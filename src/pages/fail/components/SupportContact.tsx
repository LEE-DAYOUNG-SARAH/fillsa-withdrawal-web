function SupportContact({ email }: { email: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-16 sm:mt-[115px] w-full max-w-[460px]">
      <div className="flex items-center justify-center gap-1 font-normal text-[16px] leading-[24px] tracking-[0%] text-center">
        <img src="/message.png" alt="Message Icon" className="w-[24px] h-[24px]" />
        관리자에게 문의해주세요.
      </div>
      <div className="flex items-center justify-center">
        <a
          href={`mailto:${email}`}
          className="text-[#5C65FF] font-bold text-[16px] leading-[24px] tracking-[0%] text-center"
        >
          {email}
        </a>
      </div>
    </div>
  );
}

export default SupportContact;
