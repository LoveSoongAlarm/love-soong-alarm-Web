import { useAuthStore } from "../store/authStore";
import { useHomeStore } from "../store/homeStore";

import Close from "@/assets/icons/ic_close.svg";
import type { ChatDetail } from "../types/chat";

export const CardHeader = ({
  branch,
  title,
}: {
  branch?: "profile" | "chat";
  title: string;
}) => {
  const setResetHome = useHomeStore((state) => state.setReset);
  const setResetAuth = useAuthStore((state) => state.setReset);

  const handleReset = () => {
    setResetHome(branch);
    setResetAuth();
  };

  return (
    <>
      <button
        onClick={() => handleReset()}
        className=" rounded-full p-2 text-gray-500 hover:bg-gray-100"
        aria-label="닫기"
      />
      <div className="flex justify-between px-1 pb-3.5">
        <div className="text-[24px] font-bold text-[#231D33]">{title}</div>
        <img
          src={Close}
          alt={"close"}
          onClick={() => handleReset()}
          className="cursor-pointer"
        />
      </div>
    </>
  );
};

export const Hashtag = ({
  item,
}: {
  item: { label: string; hashtags: string[] };
}) => {
  return (
    <div className="flex items-center gap-x-1.5 shrink-0">
      <span className="inline-flex shrink-0 whitespace-nowrap text-main1 bg-main3 text-[12px] px-1.5 py-0.5 rounded-[4px]">
        #{item.label}
      </span>
      {item.hashtags.map((it, i) => (
        <span
          key={i}
          className="inline-flex shrink-0 whitespace-nowrap bg-[#AD929B]/8 text-[#331D24]/60 text-[12px] px-1.5 py-0.5 rounded-[4px]"
        >
          #{it}
        </span>
      ))}
    </div>
  );
};

export const ProfileLabel = ({ chatDetail }: { chatDetail: ChatDetail }) => {
  return (
    <div className="flex flex-row gap-x-3 items-center">
      <div>{chatDetail.partner.emoji}</div>
      <div className="flex flex-col">
        <div className="text-[18px]">{chatDetail.partner.nickname}</div>
        <div className="text-[12px] text-[#331D24]/80">
          {chatDetail.partner.age}세 | {chatDetail.partner.major}
        </div>
      </div>
    </div>
  );
};
