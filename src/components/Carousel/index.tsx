import React from 'react';
import {
  VideoCardGroupContainer,
  VideoCardList,
  Title,
  ExtraLink,
} from './styles';
import VideoCard from './components/VideoCard';

// "categorias": [
//   {
//     "titulo": "Front End",
//     "link": "https://www.alura.com.br/formacao-front-end",
//     "cor": "#6BD1FF",
//     "link_extra": {
//       "text": "Formação de Front End na Alura",
//       "url": "https://www.alura.com.br/cursos-online-front-end"
//     },
//     "videos": [
//       {
//         "titulo": "O que faz uma desenvolvedora front-end? #HipstersPontoTube",
//         "url": "https://www.youtube.com/watch?v=ZY3-MFxVdEw"
//       },
//       {
//         "titulo": "SEO com React",
//         "url": "https://www.youtube.com/watch?v=c8mVlakBESE"
//       },
//       {
//         "titulo": "Componentização com VanillaJS #AluraMais",
//         "url": "https://www.youtube.com/watch?v=LatCKpcOMak"
//       },
//       {
//         "titulo": "Pare de chutar e aprenda a display: inline #01",
//         "url": "https://www.youtube.com/watch?v=5PS6ku8NzIE"
//       },
//       {
//         "titulo": "Template String: Interpolando strings com JavaScript #AluraMais",
//         "url": "https://www.youtube.com/watch?v=ORI_HTXaIw0"
//       },
//       {
//         "titulo": "Qual é a melhor linguagem de programação? #HipstersPontoTube",
//         "url": "https://www.youtube.com/watch?v=Uh-GNH-t89w"
//       },
//       {
//         "titulo": "Novidades do Angular v9",
//         "url": "https://www.youtube.com/watch?v=34uHo7hFmG0"
//       },
//       {
//         "titulo": "Base para aprender os frameworks",
//         "url": "https://www.youtube.com/watch?v=QzDjdlF1BQI"
//       }
//     ]
//   },
interface Props {
  ignoreFirstVideo?: boolean;
  category: {
    titulo?: string;
    link?: string;
    cor: string;
    link_extra?: {
      url: string;
      text: string;
    };
    videos: {
      titulo: string;
      url: string;
    }[];
  };
}

const VideoCardGroup: React.FC<Props> = ({ ignoreFirstVideo, category }) => {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
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
};

export default VideoCardGroup;
