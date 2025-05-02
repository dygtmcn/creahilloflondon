import styled from "styled-components";

const IframeWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
`;

export default function SongDetail({ embedUrl }) {
  return (
    <IframeWrapper>
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="Spotify player"
      ></iframe>
    </IframeWrapper>
  );
}
