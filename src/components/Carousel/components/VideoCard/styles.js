import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: flex-end;
`;

export const BackgroundImage = styled.span`
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;

  -webkit-transition: all 200ms ease; /* Safari and Chrome */
  -moz-transition: all 200ms ease; /* Firefox */
  -ms-transition: all 200ms ease; /* IE 9 */
  -o-transition: all 200ms ease; /* Opera */
  transition: all 200ms ease;
  &:hover,
  &:focus {
    transform:scale(1.15);
  }
`;
