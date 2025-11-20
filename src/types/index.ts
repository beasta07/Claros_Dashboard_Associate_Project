
export type Client = {
  id: string;
  name: string;
  username:string;
  email: string;
  company: string;
  status: string;
  image:string;
};
export interface ClientDetail {
  id: string;
  image: string;
  name: string;
  username: string;
  occupation: string;
  status: "Active" | "Inactive";
  company: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  bloodGroup: string;
  university: string;
  role: string;
  address?: string;
  position?: string;
}
export interface TableSkeletonProps {
  rows?: number;
  columns?: number;
}
export type LayoutStateProps = {
  displaySidebar: boolean;
  setDisplaySidebar: React.Dispatch<React.SetStateAction<boolean>>;
};