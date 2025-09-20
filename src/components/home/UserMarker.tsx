import Marker from "@/assets/icons/Vector.svg";

interface Props {
  emoji: string;
  status?: "online" | "offline"; // 상태 점 색상
  select?: boolean;
}

export const UserMarker = ({ emoji, status = "online" }: Props) => {
  return (
    <div className="relative flex flex-col items-center justify-center z-20 w-12 cursor-pointer">
      <img src={Marker} alt="marker_icon" className="w-12 h-15" />

      <div className="absolute top-3 flex flex-col justify-center items-center gap-1">
        <span className="text-sm z-10">{emoji}</span>

        <span
          className="w-1 h-1 rounded-full"
          style={{
            backgroundColor: status === "online" ? "#22c55e" : "#9ca3af",
          }}
        />
      </div>
    </div>
  );
};
