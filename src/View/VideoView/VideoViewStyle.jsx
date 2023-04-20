import styled from "styled-components";

export const VideoViewContainer=styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        flex: .05;
    }
`
export const Video=styled.iframe`
    width: 100%;
    height: 60% ;
    min-height: 40vh;
    border: none;
    outline: none;
    box-shadow: 0 0 10px 2px rgb(80, 80, 80);
    border-radius: 10px;
`