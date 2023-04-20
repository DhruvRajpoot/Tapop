import styled from "styled-components";

export const HeroContainer=styled.div`
    display: flex;
    min-height: 90vh;
    width: 100%;
    gap: 1rem;

    @media (min-width:500px) and (max-width: 992px) {
        min-height: 120vh;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`