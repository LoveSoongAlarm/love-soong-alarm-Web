import { useState } from "react";
import { Header } from "../common/Header";
import { RailTab } from "../common/RailTab";
import { ProfileTab } from "../components/edit/ProfileTab";
import { InterestTab } from "../components/edit/InterestTab";
import { useQuery } from "@tanstack/react-query";
import { useEditProfileStore } from "../store/EditProfileState";
import { useApi } from "../api/api";
import { useEffect } from "react";

const EditTab = [
  { label: "프로필" },
  { label: "취향 1", chip: "🎧 음악" },
  { label: "취향 2", chip: "🎬 미디어" },
];

interface Interest {
  label: string;
  detailLabel: string;
  hashTags: string[];
}

interface UserProfile {
  name: string;
  birthDate: number;
  major: string;
  emoji: string;
  gender: "MALE" | "FEMALE";
  interests: Interest[];
}

export const EditPage = () => {
  const [selectedTab, setSelectedTab] = useState("프로필");
  const initialize = useEditProfileStore((state) => state.initialize);
  const original = useEditProfileStore((state) => state.original);
  const { getData } = useApi();

  const { data } = useQuery({
    queryKey: ["user-profile"],
    queryFn: () => getData<UserProfile>("/api/users/me"),
  });

  useEffect(() => {
    console.log(data);
    if (data?.data) {
      const user = data.data;
      initialize({
        nickname: user.name,
        gender: user.gender,
        birthDate: Number(user.birthDate),
        major: user.major,
        emoji: user.emoji,
        interests: user.interests,
      });
    }
  }, [data]);

  useEffect(() => {
    if (original) {
      initialize({
        ...original,
        birthDate: Number(original.birthDate),
      });
    }
  }, [selectedTab]);

  return (
    <div className="h-full flex flex-col">
      <Header title="프로필 수정" />
      <RailTab
        tabs={EditTab}
        selectedTab={selectedTab}
        onChange={setSelectedTab}
      />

      <div className="h-full">
        {selectedTab === "프로필" && <ProfileTab />}
        {selectedTab === "취향 1" && <InterestTab index={0} />}
        {selectedTab === "취향 2" && <InterestTab index={1} />}
      </div>
    </div>
  );
};
