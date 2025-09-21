export interface UserInterest {
  detailLabel: string;
  hashTags: string[];
}

export interface User {
  userId: number;
  name: string;
  age: number;
  major: string;
  emoji: string;
  interests: UserInterest[];
  lastSeen: "10분 내 접속" | "30분 내 접속" | null;
  isMatching: boolean;
  latitude: number;
  longitude: number;
}
