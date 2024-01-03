import React, { useState } from "react";

const Contact = () => {
  const [copied, SetCopied] = useState(false);
  const copyText = "aktayshakirox@gmail.com";

  const handleCopyClick = () => {
    const textarea = document.createElement("textarea");
    textarea.value = copyText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    SetCopied(true);
    setTimeout(() => {
      SetCopied(false);
    }, 2000);
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="insideS text-center pt-[25px] p-[30px] rounded-2xl">
        <h3 className="text-[24px] text-white mb-[20px] font-semibold">
          Email:
        </h3>
        <div className="flex justify-center">
          <div className="flex justify-center items-center gap-2 w-fit rounded-lg bg-[#38383883] text-[13px] text-white p-2">
            <div>aktayshakirox@gmail.com</div>
            <button
              onClick={handleCopyClick}
              className=" bg-[#383838] text-[#FFDB70] p-1 rounded-md"
            >
              {copied ? "Copied !" : "Copy"}
            </button>
          </div>
        </div>
      </div>
      <div className="insideS text-center pt-[25px] p-[30px] rounded-2xl">
        <h3 className="text-[24px] text-white mb-[40px] font-semibold">
          Schedule Video Call With Me:
        </h3>
        <div className="flex justify-center">
          <img
            src="https://oktayshakirov.com/assets/images/calendar.png"
            alt="calender"
          />
        </div>
      </div>
      <div className="insideS text-center pt-[25px] p-[30px] rounded-2xl">
        <h3 className="text-[24px] text-white mb-[40px] font-semibold">
          Socials:
        </h3>
        <div className="icons flex justify-center gap-5 mb-[10px]">
          <img
            src="https://oktayshakirov.com/assets/images/socials/github.png"
            alt="social"
          />
          <img
            src="https://oktayshakirov.com/assets/images/socials/linkedin.png"
            alt="social"
          />
          <img
            src="https://oktayshakirov.com/assets/images/socials/instagram.png"
            alt="social"
          />
          <img
            src="https://oktayshakirov.com/assets/images/socials/twitter.png"
            alt="social"
          />
        </div>
      </div>
      <div className="insideS text-center pt-[25px] p-[30px] rounded-2xl">
        <h3 className="text-[24px] text-white mb-[40px] font-semibold">
          Support My Work:
        </h3>
        <p className="mb-[40px] text-[#D6D6D6] text-[15px]">
          Your support fuels my development journey! With every small donation,
          you contribute to hostings, domains and other essential costs. All my
          work is open source and free for everyone to use.
        </p>
        <div className="flex flex-col items-center justify-center gap-5 links">
          <img
            className="w-[230px] rounded-xl"
            src="https://oktayshakirov.com/assets/images/coffee-sponsort.png"
            alt="links"
          />
          <img
            className="w-[230px] rounded-xl"
            src="https://oktayshakirov.com/assets/images/github-sponsors.png"
            alt="links"
          />
          <img
            className="w-[230px] rounded-xl"
            src="https://oktayshakirov.com/assets/images/paypalme.png"
            alt="links"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
