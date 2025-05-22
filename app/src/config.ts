import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        {
          media: {
            type: 'video',
            src: import('./assets/videos/editer1.mp4'), 
            poster: import('./assets/img/telefon.jpg'), 
            style: 'aspect-ratio: 1024/1024',
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Привет!',
          description:
            "Я - ваш цифровой помощник для быстрого доступа к нормативам, инструкциям и технической документации. Всегда под рукой на объекте, в цеху или в офисе.",
          button: 'Как это работает?',
        },

        
        // что такое кпт
        {
          media: {
            type: 'video',
            src: import('./assets/videos/Healfina2.mp4'), 
            poster: import('./assets/img/treatment compare.jpg'),
            style: 'aspect-ratio: 1280/896'
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Мгновенный поиск',
          description:
            "Быстро находите:<br><b>• ГОСТы<br>• Технические регламенты<br>• Инструкции и руководства</b><br>— просто задайте вопрос или введите ключевые слова.",
          button: 'А что ещё?',
        },


        // some animated media 
        {
          media: {
            type: 'video',
            src: import('./assets/videos/Healfina3.mp4'),
            poster: import('./assets/img/logo_brain.png'),
            style: 'aspect-ratio: 750/420',
          },
          shape: 'rounded',
          pagination: 'count',
          title: ' Безопасность прежде всего',
          description:
            "Я использую RAG (поиск по базе документов), чтобы давать точные и обоснованные ответы.📄🤖 Это лучше, чем просто чат!",
          button: 'Можно ли просто делать записи?',
        },


        // а что ты умеешь?
        {
          media: {
            type: 'video',
            src: import('./assets/videos/Healfina4.mp4'),
            poster: import('./assets/img/site_img.png'),
            style: 'aspect-ratio: 1456/850',
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'А что ты умеешь?',
          description:
            ' Ты можешь сохранять свои заметки, идеи и выводы прямо в боте. ✍️<br>Я запомню их и буду учитывать в следующих сессиях, а еще дам небольшой совет ',
          button: 'Где найти записи?',
        },

        
        // какой у нас план
        {

          media: {
            type: 'video',
            src: import('./assets/videos/Healfina5.mp4'), 
            poster: import('./assets/img/healfina and girl2.jpg'), 
            style: 'aspect-ratio: 908/878',
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Просмотр записей',
          description:
            'Все записи можно легко просматривать в профиле. У тебя всегда под рукой твои мысли, выводы и задачи.📘',
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/time.svg'),
                size: 30,
              },
              text: 'быстрый доступ к дневник',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/guide.svg'),
                size: 30,
              },
              text: 'личные заметки на каждый день',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/track.svg'),
                size: 30,
              },
              text: 'контекст для чата',
            }
            ],
            button: 'Это безопасно?',
        },

        // а это безопасно?
        {
          media: {
            type: 'video',
            src: import('./assets/videos/Healfina6.mp4'), 
            poster: import('./assets/img/healfina photo.jpg'), 
            style: 'aspect-ratio: 640/640',
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'А это безопасно?',
          description:
            'Все данные хранятся надежно в базе данных 🔐.<br><br>Давай начнем? Вернись в чат с ботом и нажми кнопку <b>“Начать общение”</b>.',
          button: {
            content: 'Вернуться в чат',
            href: 'https://t.me/AndreevHelper_bot',
          }
        },
      ],
    },
  ],
});
