import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
export type User = {
  image: StaticImageData;
  name: string;
  email: string;
  id: number;
  role: string;
  location: {
    city: string;
    country: string;
    province: string;
    district: string;
    cell: string;
    village: string;
  };
};
export type Problem = {
  id: string;
  description: string;
  level: string;
  completed: boolean;
  ikibazo: string;
  urwego: string;
  target: string;
};
export type Suggestion = {
  id: string;
  igitekerezo: string;
  level: string;
  status: string;
  urwego: string;
  location: string;
};

export type Chat = {
  image: StaticImageData;
  user: string;
  time: string;
  latestMessage: string;
  id: number;
  status: string;
};

export type Event = {
  startDateTime: any;
  endDateTime: any;
  eventName: string;
  startDate: string;
  endDate: string;
  location: string;
  completed: boolean;
  descriptions: string;
  owner: string;
  id: string;
  startTime: string;
  endTime: string;
  organizationLevel: string;
  category: string;
};

export interface Route {
  icon: React.ComponentType<any>;
  activeIcon: React.ComponentType<any>;
  name: string;
  path: string;
}

export type District = {
  name: string;
  problems: number | string;
  suggestions: number | string;
  leader: string;
};
