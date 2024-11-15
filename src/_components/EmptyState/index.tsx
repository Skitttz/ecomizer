import { IconMoodSadSquint } from '@tabler/icons-react';
import { EmptyStateContainer } from './style';

function EmptyState() {
  return (
    <EmptyStateContainer>
      <h1>Oops! There are no transactions</h1>
      <IconMoodSadSquint size={32} color="#f2f2f2" />
    </EmptyStateContainer>
  );
}

export { EmptyState };
