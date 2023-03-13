import { styled } from '@stitches/react';
import { slate, slateA, blueA } from '@radix-ui/colors';

const Button = styled('button', {
    all: 'unset',
    padding: '.6rem 1rem',
    margin: '.4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '.4rem',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'transform .08s ease-in-out',
    '&:active': {
        transform: 'translate(0, 2px) scale(0.95)',
    },
    '&:focus': {
        outline: `3px solid ${blueA.blueA9}`,
        boxShadow: `0 0 15px ${blueA.blueA9}`,
    },
    '@media print': {
        display: 'none',
    },

    variants: {
        variant: {
            default: {
                background: slate.slate12,
                color: slate.slate6,
                '&:hover': {
                    background: slate.slate11,
                },
            },
            outlined: {
                backgroundColor: '#ffffff00',
                backdropFilter: 'blur(1px)',
                transition:
                    'transform .08s ease-in-out, backdrop-filter .15s ease-in-out, background-color 0.3s ease-in-out',
                color: slate.slate12,
                border: `1px solid ${slate.slate11}`,
                '&:hover': {
                    backdropFilter: 'blur(2px)',
                    backgroundColor: slateA.slateA6,
                },
            },
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

export default Button;
