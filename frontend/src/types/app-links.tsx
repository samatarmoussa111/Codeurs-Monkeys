import { LinkType } from "@/lib/link-type";

export interface AppLinks {
  label: string;
  baseUrl: string;
  type: LinkType;
}

export interface footerLinks {
  title: string;
  data: AppLinks[];
}
