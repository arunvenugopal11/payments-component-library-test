
import { PropsWithChildren, FC } from 'react';
import styled from 'styled-components';

interface AlertProps {
    variant: 'informative' | 'warning';
    maxWidth?: string;
}

const variantColors = {
    'informative': {
        borderColor: 'rgb(97, 159, 214)',
        bgColor: 'rgb(232, 237, 241)'
    },
    'warning': {
        borderColor: 'rgb(245, 173, 27)',
        bgColor: 'rgb(255, 247, 234)'
    }
}

const Wrapper = styled.div<AlertProps>(({ variant, maxWidth }) => ({
    display: 'flex',
    padding: '16px',
    borderRadius: '4px',
    lineHeight: '22px',
    backgroundColor: `${variantColors[variant].bgColor}`,
    border: `1px solid ${variantColors[variant].borderColor}`,
    maxWidth,
    fontFamily: 'Arial, sans-serif'
}));

const Alert: FC<PropsWithChildren<AlertProps>> = ({ variant, maxWidth, children }) => (
    <Wrapper maxWidth={maxWidth} role='alert' variant={variant}>
        {children}
    </Wrapper>
)

export default Alert