import { Button } from "../../common/Button";
import { Chip } from "../../components/profileOnboarding/Chip";
import { Header } from "../../common/Header";

import { Description } from "../../components/profileOnboarding/Description";
import { ProgressBar } from "../../components/profileOnboarding/ProgressBar";
import { Link } from "react-router-dom";
import { useOnboardingStore } from "../../store/onboardingStore";
import { INTEREST_OPTIONS } from "../../constants/interests";

export const Onboarding_Interests = () => {
  const { interests, setInterests } = useOnboardingStore();

  const handleSelect = (value: string) => {
    if (interests.includes(value)) {
      setInterests(interests.filter((item) => item !== value));
    } else {
      if (interests.length >= 2) return;
      setInterests([...interests, value]);
    }
  };

  const isFilled = interests.length;

  return (
    <div className="h-full flex flex-col justify-between relative">
      <div className="flex flex-col">
        <Header title="60% 작성 완료" />
        <ProgressBar per="60%" />

        <Description
          title="내 취향 2개를 선택해주세요"
          subTitle="이 정보를 바탕으로 운명의 이성이 매치돼요!"
        />

        <div className="flex justify-center">
          <div
            className="px-4 py-2.5 grid gap-2 justify-center w-full"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(65px, 1fr))",
            }}
          >
            {INTEREST_OPTIONS.map((option) => (
              <Chip
                key={option.value}
                variant="interest"
                selected={interests.includes(option.value)}
                label={option.label}
                className="w-full justify-center"
                onClick={() => handleSelect(option.value)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full mb-8 px-4 py-2.5 absolute bottom-0 bg-white">
        <Link to="/onboarding/preference/0">
          <Button variant={isFilled ? "primary" : "disabled"}>다음으로</Button>
        </Link>
      </div>
    </div>
  );
};
