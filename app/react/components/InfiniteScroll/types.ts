export interface InfiniteScrollProps {
  children: React.ReactNode;
  load: () => Promise<void>;
  loading?: boolean;
}
