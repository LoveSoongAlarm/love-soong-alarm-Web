import { getPrevChat } from "../api/chat";
import { useMessageStore } from "../store/messageStore";

export const usePrevChat = async ({
  roomId,
  hasPrev,
  oldestId,
}: {
  roomId: number;
  hasPrev: boolean;
  oldestId: number;
}) => {
  const prependMessages = useMessageStore((state) => state.prependMessages);
  console.log(roomId, hasPrev, oldestId);

  if (!hasPrev) return;

  try {
    const res = await getPrevChat({ roomId: roomId, lastMessageId: oldestId });
    console.log(res);
  } catch (e: any) {
    console.log(e);
  }
};
