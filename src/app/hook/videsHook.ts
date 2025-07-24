import video from "../types/videotype";

export function useVideos(){
  const Videos: video[] = [
    {
      title: 'Como aprendi programação sozinho',
      channel: 'Dev Junior',
      views: '250 mil',
      time: 'há 1 dia',
      duration: '12:34',
      isLive: false,
      thumbnail: 'https://picsum.photos/320/180?random=1'
    },
    {
      title: 'Por que JavaScript é tão odiado?',
      channel: 'StackFury',
      views: '89 mil',
      time: 'há 3 horas',
      duration: '8:50',
      isLive: false,
      thumbnail: 'https://picsum.photos/320/180?random=2'
    },
    {
      title: 'LIVE: tirando dúvidas de JavaScript ao vivo',
      channel: 'JS na Veia',
      views: '2,1 mil',
      time: 'ao vivo',
      duration: null,
      isLive: true,
      thumbnail: 'https://picsum.photos/320/180?random=3'
    },
    {
      title: 'TOP 10 animações mais insanas',
      channel: 'NerdAleatório',
      views: '1,2 milhão',
      time: 'há 1 semana',
      duration: '14:22',
      isLive: false,
      thumbnail: 'https://picsum.photos/320/180?random=4'
    },
    {
      title: 'React vs Vue: qual vale mais a pena?',
      channel: 'Codando Alto',
      views: '77 mil',
      time: 'há 2 dias',
      duration: '16:10',
      isLive: false,
      thumbnail: 'https://picsum.photos/320/180?random=5'
    },
    {
      title: 'Testando comidas estranhas do Japão',
      channel: 'Mundo Sem Filtro',
      views: '312 mil',
      time: 'há 10 horas',
      duration: '11:00',
      isLive: false,
      thumbnail: 'https://picsum.photos/320/180?random=6'
    },
    {
      title: 'Machine Learning explicado de forma simples',
      channel: 'TechDescomplica',
      views: '134 mil',
      time: 'há 4 dias',
      duration: '18:05',
      isLive: false,
      thumbnail: 'https://picsum.photos/320/180?random=7'
    },
    {
      title: 'Vale a pena usar Tailwind em 2025?',
      channel: 'FrontAvançado',
      views: '200 mil',
      time: 'há 6 dias',
      duration: '9:45',
      isLive: false,
      thumbnail: 'https://picsum.photos/320/180?random=8'
    },
    {
      title: '🔴 LIVE: Aprenda React do zero!',
      channel: 'ReactPro',
      views: '3 mil',
      time: 'ao vivo',
      duration: null,
      isLive: true,
      thumbnail: 'https://picsum.photos/320/180?random=9'
    },
    {
      title: 'TOP 5 jogos que marcaram época',
      channel: 'RetroGamePlay',
      views: '540 mil',
      time: 'há 2 semanas',
      duration: '13:30',
      isLive: false,
      thumbnail: 'https://picsum.photos/320/180?random=10'
    },
    {
      title: 'Como fazer café perfeito em casa',
      channel: 'Cozinha Simples',
      views: '15 mil',
      time: 'há 8 horas',
      duration: '6:20',
      isLive: false,
      thumbnail: 'https://picsum.photos/320/180?random=11'
    },
    {
      title: 'Entrevista com um desenvolvedor sênior',
      channel: 'CodeTalks',
      views: '95 mil',
      time: 'há 3 dias',
      duration: '22:15',
      isLive: false,
      thumbnail: 'https://picsum.photos/320/180?random=12'
    },
    {
      title: 'A origem do universo (documentário)',
      channel: 'Cosmos BR',
      views: '1,5 milhão',
      time: 'há 1 mês',
      duration: '25:00',
      isLive: false,
      thumbnail: 'https://picsum.photos/320/180?random=13'
    },
    {
      title: 'JavaScript em 10 minutos',
      channel: 'DevFlash',
      views: '300 mil',
      time: 'há 5 dias',
      duration: '10:00',
      isLive: false,
      thumbnail: 'https://picsum.photos/320/180?random=14'
    },
    {
      title: 'Como resolver bugs misteriosos no código',
      channel: 'BugHunter',
      views: '76 mil',
      time: 'há 2 horas',
      duration: '7:50',
      isLive: false,
      thumbnail: 'https://picsum.photos/320/180?random=15'
    },
    {
      title: 'Como funciona o ChatGPT',
      channel: 'Inteligência Artificial BR',
      views: '180 mil',
      time: 'há 1 semana',
      duration: '12:12',
      isLive: false,
      thumbnail: 'https://picsum.photos/320/180?random=16'
    },
    {
      title: 'Músicas relaxantes para estudar',
      channel: 'Focus Music',
      views: '2,3 milhão',
      time: 'há 10 dias',
      duration: '1:00:00',
      isLive: false,
      thumbnail: 'https://picsum.photos/320/180?random=17'
    },
    {
      title: 'Podcast #57 - Vida de programador',
      channel: 'DevCast',
      views: '45 mil',
      time: 'há 2 semanas',
      duration: '34:45',
      isLive: false,
      thumbnail: 'https://picsum.photos/320/180?random=18'
    },
    {
      title: 'Unboxing do novo iPhone 15',
      channel: 'TechBR',
      views: '1 milhão',
      time: 'há 5 dias',
      duration: '15:25',
      isLive: false,
      thumbnail: 'https://picsum.photos/320/180?random=19'
    },
    {
      title: 'LIVE: Jogando GTA RP com inscritos',
      channel: 'PlayerBR',
      views: '7 mil',
      time: 'ao vivo',
      duration: null,
      isLive: true,
      thumbnail: 'https://picsum.photos/320/180?random=20'
    }
  ];
const tags = [
  "Tudo", "Música", "Esporte", "Programação", "Jogos", "Podcasts", "Transmissão",
  "Culinária", "Notícias", "Filmes", "Rap", "Álbuns", "R&B", "Mixes", "Dark ambient",
  "Javascript", "Indie Pop", "Tecnologia", "Stand-up", "Documentários", "Review",
  "Unboxing", "Animações", "Curiosidades", "Motivação", "Entrevistas", "Educação",
  "Vlogs", "DIY", "Meditação", "Cinema", "Rock", "K-pop", "Funk", "Trap", "Lo-fi",
  "DevOps", "React", "Node.js", "UX/UI", "Design", "Memes", "Terror", "Curta-metragem"
];




return {Videos,tags}
}
