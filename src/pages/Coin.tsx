import { useState } from "react";

const COIN_CONST = [
  { id: 1, price: 1000, coin: 2 },
  { id: 2, price: 1500, coin: 3 },
  { id: 3, price: 2000, coin: 4 },
];

export const Coin = () => {
  const [selected, isSelected] = useState<number>(1);

  return (
    <div className="flex flex-col w-full gap-y-1 px-4 py-2.5 justify-cenbter items-start">
      <div className="text-base font-bold text-[20px] pb-1">코인 선택</div>
      <div className="flex flex-row w-full gap-x-2 py-2">
        {COIN_CONST.map((item, index) => (
          <div
            key={index}
            className={`${
              item.id === selected
                ? "border-2 border-main1 text-main1 bg-[#EDEBF2]/2"
                : "text-disabled bg-[#EDEBF2]/40"
            } w-[33%] flex flex-col py-2.5 items-center rounded-[8px] cursor-pointer`}
            onClick={() => isSelected(item.id)}
          >
            <div className="font-light text-[12px]">{item.price}원</div>
            <div className="font-bold text-[16px]">{item.coin} 코인</div>
          </div>
        ))}
      </div>
    </div>
  );
};
