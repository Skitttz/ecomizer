import { Dots, LoadingContainer } from './style';

function Loading() {
  return (
    <LoadingContainer>
      <h2>
        Loading
        <Dots />
      </h2>
    </LoadingContainer>
  );
}

export { Loading };
