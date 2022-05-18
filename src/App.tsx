import React, { ButtonHTMLAttributes, FC } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import MyComponent from './FunctionalTest';
import Button, { ButtonProps } from './Button';

interface ComponentProps {
  className?: string;
  label: string;
}

const Component: FC<ComponentProps> = ({ label, className }) => <div className={className}>{label}</div>;

const StyledComponent0 = styled(Component)`
  color: ${(props) => (props.label === 'Important' ? 'red' : 'green')};
`;

const StyledComponent1 = styled(Component)({
  color: 'red',
});

const CButton: FC<ButtonProps> = ({ size }) => <Button size={size}>a</Button>;

const StyledButton = styled(CButton)`
  --button-bg-color: red;
  width: 222px;
`;

const StyledButton1 = styled(CButton)({
  // --button-bg-color: 'red',
  width: '222px',
});

function App() {
  return (
    <div className='App'>
      <Button>확인</Button> <Button size='md'>확인</Button> <Button size='lg'>확인</Button> <Button>취소</Button>{' '}
      <Button size='md'>취소</Button> <Button size='lg'>취소</Button>
      <CButton />
      <StyledButton />
      <StyledButton1 size='md' />
      <div>
        <StyledComponent0 label='Important' />
        <StyledComponent1 label='Yea! No need to re-type this label prop.' />
      </div>
    </div>
  );
}

export default App;
