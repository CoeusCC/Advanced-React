import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
    background: var(--red);
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);
    a {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        padding: 0.5rem 1rem;
    }

`;

const HeaderStyles = styled.header`
    background: --red;
    .bar {
        border-bottom: 10px solid black;
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;
        @media (max-width: 1300px) {
            grid-template-columns: 1fr;
            justify-content: center;
        }
    }
`;

export default function Header() {
    return (
        <HeaderStyles>
            <div className="bar">
                <Logo>
                    <Link href="/">Sick Fits</Link>
                </Logo>
            </div>
            <Nav />
        </HeaderStyles>
    );
}