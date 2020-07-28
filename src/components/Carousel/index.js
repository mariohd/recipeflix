import React from 'react';
import { VideoCardGroupContainer, VideoCardList, Title, Text } from './styles';
import VideoCard from './components/VideoCard';
import pluralize from 'pluralize'; 

function VideoCardGroup({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          <Text as="span">
            {videos.length} {pluralize('vídeo', videos.length) } nesta categoria
          </Text>
        </>
      )}
      <VideoCardList>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <li key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </li>
          );
        })}
      </VideoCardList>
    </VideoCardGroupContainer>
  );
}

export default VideoCardGroup;
