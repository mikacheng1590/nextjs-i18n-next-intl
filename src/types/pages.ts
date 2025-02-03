import { ReactNode } from "react";

interface IPageParams {
  params: Promise<{ locale: string }>
}

export interface ILayoutParams extends IPageParams {
  children: ReactNode;
}

export default IPageParams;