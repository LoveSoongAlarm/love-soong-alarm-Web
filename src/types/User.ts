export interface UserInterest {
  detailLabel: string;
  hashTags: string[];
}

export interface User {
  id: number;
  name: string;
  age: number;
  major: string;
  emoji: string;
  interests: UserInterest[];
  lastSeen: string;
  isMatching: boolean;
  latitude: number;
  longitude: number;
}
