import styled from "styled-components";

export const VideoViewContainer=styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Video=styled.iframe`
    width: 100%;
    min-height: 40vh;
    height: 65%;
    border: none;
    outline: none;
    box-shadow: 0 0 10px 2px rgb(80, 80, 80);
    border-radius: 10px;
    
    @media (min-width:500px) and (max-width: 992px) {
        height: 55vh;
    }
`