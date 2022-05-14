import { render } from '@testing-library/react';
import  Alert  from './Alert';

describe('Alert component testing', () => {
  it('renders the text correctly', () => {
    const text = 'Alert';
    const { getByText } = render(<Alert variant='informative' maxWidth='100px'>This is a random text</Alert>);

    expect(getByText(text)).toBeInTheDocument();
  });
}); 
