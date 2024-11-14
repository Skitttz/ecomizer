import { MainContainer } from './style';

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return <MainContainer>{children}</MainContainer>;
}
