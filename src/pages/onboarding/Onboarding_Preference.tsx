import { Header } from "../../common/Header";
import { Chip } from "../../components/profileOnboarding/Chip";
import { ChipStack } from "../../components/profileOnboarding/ChipStack";
import { Description } from "../../components/profileOnboarding/Description";
import { ProgressBar } from "../../components/profileOnboarding/ProgressBar";
import { SectionHeader } from "../../components/profileOnboarding/SectionHeader";
import { Divider } from "../../common/Divider";
import { Button } from "../../common/Button";
import { HashtagInput } from "../../components/profileOnboarding/HashtagInput";
import { useOnboardingStore } from "../../store/onboardingStore";
import { Link, useNavigate, useParams } from "react-router-dom";

const genreOptions: Record<string, { label: string; value: string }[]> = {
  음악: [
    { label: "밴드", value: "밴드" },
    { label: "힙합", value: "힙합" },
    { label: "케이팝", value: "케이팝" },
    { label: "클래식", value: "클래식" },
  ],
  미디어: [
    { label: "영화", value: "영화" },
    { label: "드라마", value: "드라마" },
    { label: "예능", value: "예능" },
    { label: "다큐멘터리", value: "다큐멘터리" },
  ],
  게임: [
    { label: "모바일게임", value: "모바일게임" },
    { label: "콘솔게임", value: "콘솔게임" },
    { label: "PC게임", value: "PC게임" },
  ],
  운동: [
    { label: "러닝", value: "러닝" },
    { label: "헬스", value: "헬스" },
    { label: "클라이밍", value: "클라이밍" },
    { label: "복싱", value: "복싱" },
    { label: "수영", value: "수영" },
    { label: "보드", value: "보드" },
    { label: "체조", value: "체조" },
    { label: "댄스", value: "댄스" },
  ],
  스포츠: [
    { label: "KBO", value: "KBO" },
    { label: "K리그", value: "K리그" },
    { label: "해외축구", value: "해외축구" },
    { label: "e스포츠", value: "e스포츠" },
    { label: "농구", value: "농구" },
    { label: "배구", value: "배구" },
    { label: "모터스포츠", value: "모터스포츠" },
  ],
  독서: [
    { label: "소설", value: "소설" },
    { label: "에세이", value: "에세이" },
    { label: "시집", value: "시집" },
    { label: "웹소설", value: "웹소설" },
    { label: "자기계발서", value: "자기계발서" },
  ],
  패션: [
    { label: "스트릿", value: "스트릿" },
    { label: "빈티지", value: "빈티지" },
    { label: "클래식", value: "클래식" },
    { label: "수집", value: "수집" },
  ],
  식도락: [
    { label: "맛집탐방", value: "맛집탐방" },
    { label: "카페", value: "카페" },
    { label: "요리", value: "요리" },
  ],
  여행: [
    { label: "국내여행", value: "국내여행" },
    { label: "해외여행", value: "해외여행" },
    { label: "캠핑", value: "캠핑" },
  ],
};

export const Onboarding_Preference = () => {
  const { step } = useParams();
  const navigate = useNavigate();
  const { interests, interestDetail, setInterestDetail, hashtags } =
    useOnboardingStore();

  const currentStep = Number(step || 0);
  const currentInterest = interests[currentStep];
  const genres = genreOptions[currentInterest] || [];

  const handleGenreClick = (genre: string) => {
    if (interestDetail === genre) {
      setInterestDetail(null);
    } else {
      setInterestDetail(genre);
    }
  };

  const isFilled = !!(interestDetail && hashtags.length > 0);
  const isLast = currentStep === interests.length - 1;

  const handleNext = () => {
    if (!isFilled) return;

    if (isLast) {
      // 시작하기(온보딩 api) 호출
    } else {
      navigate("/onboarding/preference/1");
    }
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col">
        <Header title="80% 작성 완료" />
        <ProgressBar per="80%" />

        <Description
          title="휴멸님의 음악 취향에 대해 알려주세요"
          subTitle="더 자세히 적을수록 나와 맞는 소울메이트가 찾아와요!"
        />

        <div className="px-4">
          <SectionHeader title="자세한 취향 분류" />
          <ChipStack>
            {genres.map((genre) => (
              <Chip
                variant="detail"
                selected={interestDetail === genre.value}
                label={genre.label}
                onClick={() => handleGenreClick(genre.value)}
              />
            ))}
          </ChipStack>

          <Divider />

          <SectionHeader
            title="취향 해시태그"
            subTitle="10자 이내로 작성해주세요"
          />

          <HashtagInput />
        </div>
      </div>

      <div className="mb-8 px-4 py-2.5 flex flex-col gap-2">
        <Button
          variant={isFilled ? "primary" : "disabled"}
          onClick={handleNext}
        >
          {isLast ? "시작하기" : "다음으로"}
        </Button>
        {isFilled && isLast && (
          <div className="px-1 pt-0.5 text-assistive text-xs font-normal text-center">
            "시작하기" 버튼을 통해 서비스를 시작하였을 경우,
            <Link to={"/term"} className="text-additive font-bold underline">
              약관의 내용
            </Link>
            을 모두 읽고 이를 충분히 이해하였으며, 그 적용에 동의한 것으로
            봅니다.
          </div>
        )}
      </div>
    </div>
  );
};
