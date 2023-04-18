import styled from "styled-components";

export const HeroContainer=styled.div`
    display: flex;
    min-height: 90vh;
    width: 100%;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`