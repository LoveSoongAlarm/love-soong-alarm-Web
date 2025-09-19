import { useOutletContext, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ChatContent } from "../components/chat/Content";
import { CHAT_CONST } from "../hooks/consts";
import { useSwipeBack } from "../hooks/useSwipePage";
import type { SocketActions } from "../components/Layout/SocketLayout";
import { CardLayout } from "../components/home/Card/Layout";
import { ExcessChat } from "../components/home/Card/ExcessChat";
import { IgnoreUser } from "../components/home/Card/IgnoreUser";

const RenderCard = () => (
  <>
    <CardLayout branch="excesschat">
      <ExcessChat />
    </CardLayout>

    <CardLayout branch="ignoreuser">
      <IgnoreUser />
    </CardLayout>
  </>
);

export const Chat = () => {
  const { handleEnter, handleExit } = useOutletContext<SocketActions>();

  const { chatRoomId } = useParams<{ chatRoomId: string }>();
  const id = Number(chatRoomId);
  const prevIdRef = useRef<number | null>(null);

  useEffect(() => {
    const prevId = prevIdRef.current;
    if (Number.isFinite(id)) {
      if (prevId !== null && prevId !== id && Number.isFinite(prevId)) {
        handleExit?.(prevId);
      }
      if (prevId !== id) handleEnter?.(id);
      prevIdRef.current = id;
    }
    return () => {
      const lastId = prevIdRef.current;
      if (Number.isFinite(lastId!)) handleExit?.(lastId!);
      prevIdRef.current = null;
    };
  }, [id, handleEnter, handleExit]);

  const containerRef = useSwipeBack<HTMLDivElement>({
    threshold: 100,
    verticalGuard: 40,
    edgeOnly: true,
    wheelThreshold: 80,
    chatRoomId: chatRoomId!,
    onExit: handleExit,
  });

  return (
    <>
      <div
        ref={containerRef}
        className="relative h-full w-full overflow-y-auto touch-pan-y"
      >
        {CHAT_CONST.map((item, index) => (
          <ChatContent key={index} item={item} />
        ))}
      </div>

      <RenderCard />
    </>
  );
};
