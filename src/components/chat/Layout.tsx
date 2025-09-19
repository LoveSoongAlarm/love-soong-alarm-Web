import { Outlet, useLoaderData, useOutletContext } from "react-router-dom";

import { ChatCard } from "./Card";
import { ChatInput } from "./Input";
import type { SocketActions } from "../Layout/SocketLayout";

export const ChatLayout = () => {
  const { chatDetail } = useLoaderData();

  const { handleEnter, handleExit, handleSend } =
    useOutletContext<SocketActions>();

  const ctx: SocketActions = { handleEnter, handleExit, handleSend };

  console.log(chatDetail);

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <div className="flex flex-col items-center gap-4 shrink-0">
        <ChatCard chatDetail={chatDetail.data} />
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
        <Outlet context={ctx} />
      </div>

      <div className="shrink-0">
        <ChatInput handleSend={handleSend!} />
      </div>
    </div>
  );
};
