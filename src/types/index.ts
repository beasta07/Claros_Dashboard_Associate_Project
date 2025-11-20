
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
export interface CompanySectionProps {
  client: {
    address?: string;
company: string;
occupation: string;    
    };
  };
  export interface AdditionalInfoSectionProps {
  client: {
    bloodGroup: string
    university: string
    role: string
    username: string
    age: number
  }
}
export interface AddressSectionProps {
  client: {
    address: {
      address: string
      city: string
      state: string
      stateCode: string
      postalCode: string
      country: string
    }
  }
}
export interface ContactSectionProps {
  client: {
    email: string
    phone: string
    age: number
    gender: string
  }
}
export interface CardSkeletonProps {
  height?: string;
}
export interface ListSkeletonProps {
  count?: number; 
}
export interface AvatarBadgeProps {
  src: string
  alt: string
}
export interface InfoCardProps {
  label: string
  value: string
  icon?: string
  href?: string
}
export interface MetricCardProps {
  label: string
  value: string
  color: string
  textColor: string
}
export interface AuthState {
  token: string | null;
}
export interface LoginResponse {
  token: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
