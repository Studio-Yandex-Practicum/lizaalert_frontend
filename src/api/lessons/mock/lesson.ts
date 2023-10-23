import type { LessonModel } from '../types';

const lessons: Record<string, Record<string, LessonModel>> = {
  1: {
    1: {
      id: 1,
      course_id: 1,
      chapter_id: 1,
      title: 'Дрессировка поисково-спасательных собак',
      description:
        '#### Терминология\n Поисково-спасательная служба (ПСС) — совокупность органов управления, сил и средств, предназначенных для решения задач по предупреждению и ликвидации чрезвычайных ситуаций.\n\n Собака-спасатель — не просто профессия, это благороднейшее дело, которому животное с владельцем должны отдать массу сил и времени. При этом четвероногие герои просто делают своё дело, даже не подозревая, что если бы не они, то на свете было бы куда больше сломанных судеб, разрушенных семей и оборвавшихся жизней.\n #### Какие породы собак наиболее подходят для ППС\n Наиболее подходящими можно считать немецкую овчарку, ретривера, бордер-колли, бельгийскую овчарку, ризеншнауцера, добермана, ньюфаундленда, русского спаниеля, терьеров. Нужно учесть ещё и то, что служебной собаке приходится работать с людьми разного возраста, подчас очень испуганными (находящимися в состоянии стресса), поэтому пёс должен быть неагрессивным. Территории, на которых ведётся поиск пострадавших, могут быть самыми разнообразными и занимать значительные площади, что требует от собаки хорошей ориентировочной реакцией. Пёс не должен быть трусливым и должен спокойно переносить частые переезды на любом виде транспорта. Трусость, отсутствие активности, недостаточные слух и обоняние, нервозность, боязнь выстрелов, громких звуков и задымлений делают собаку непригодной для поисково-спасательной службы.\n\n Необходимые качества собак для поисково спасательной службы. Выполнение такой сложной и изнурительной работы возможно лишь в том случае, если у собаки великолепные природные данные, которые развиты и усовершенствованы специальной профессиональной подготовкой собак. Для работы в ПСС собака должна обладать отличным слухом, острым чутьём, выносливостью и недюжинной силой.\n\n Желательно, чтобы она была не выше 45–50 см, что облегчит её транспортировку и передвижение в труднодоступных местах. Собака для ПСС должна иметь сильный и уравновешенный характер, хорошо обучаться и доверять людям. Даже незнакомые люди и животные не должны вызывать у неё агрессию. Вялые или наоборот, чрезмерно возбудимые животные, малопригодны для спасательной работы.\n\n Несмотря на то, что ПСС — довольно сложная работа, она не требует подбора собак специальных пород с особыми родословными. Опыт показывает, что хорошо справляются со службой лайки, немецкие овчарки, колли, сенбернары, а также метисы. Что касается возраста, то для тренировки подойдёт не только щенок, но и хорошо развитая собака до двухлетнего возраста.\n\n С учётом специфики работы, дрессировщики используют, как более выносливых и сильных кобелей, так и внимательных и осторожных сук. Не возраст, порода и пол, а грамотная подготовка животных и правильный уход за ними влияют на конечный результат.\n\n Из служебных пород, бесспорно, лучшей для ПСС является колли. Собаки этой породы прекрасно производят все виды поиска, никогда не проявляют агрессивности к незнакомым людям. Они обладают большим «интеллектом», то есть ярко выраженной рассудочной деятельностью. На родине этих собак, в Шотландии, имеется 4 разновидности породы — колли длинношёрстный, гладкошёрстный, бородатый и бордер. Лучшей для поисковой службы является бордер колли. При хорошей видимости эти небольшие собаки (рост в холке — 50 см) работают самостоятельно, находясь от проводника на большом расстоянии.\n\n Вырабатывать у собаки поисковый навык надо с раннего возраста, а дрессировку по курсу ПСС следует начинать с 1–1,5 лет.\n\n К дрессировке собак по специальному курсу поисково-спасательной службы приступают после выработки навыков ОКД, однако интерес к обыску местности и раскапыванию зарытых источников запаха начинают развивать с раннего возраста.',
      lesson_type: 'Lesson',
      tags: "['onto', 'determine', 'avoid', 'yes', 'require']",
      duration: 1,
      additional: false,
      diploma: false,
      breadcrumbs: {
        chapter: {
          id: 1,
          title: 'Глава',
        },
        course: {
          id: 1,
          title: 'Курс',
        },
      },
    },
    2: {
      id: 2,
      course_id: 1,
      chapter_id: 1,
      title: 'Видео по теме',
      description: '',
      lesson_type: 'Videolesson',
      tags: "['onto', 'determine', 'avoid', 'yes', 'require']",
      duration: 2,
      additional: false,
      diploma: false,
      breadcrumbs: {
        chapter: {
          id: 1,
          title: 'Глава',
        },
        course: {
          id: 1,
          title: 'Курс',
        },
      },
    },
    3: {
      id: 3,
      course_id: 1,
      chapter_id: 1,
      title: 'Ещё один урок по теме',
      description:
        '#### Терминология\n Поисково-спасательная служба (ПСС) — совокупность органов управления, сил и средств, предназначенных для решения задач по предупреждению и ликвидации чрезвычайных ситуаций.\n\n Собака-спасатель — не просто профессия, это благороднейшее дело, которому животное с владельцем должны отдать массу сил и времени. При этом четвероногие герои просто делают своё дело, даже не подозревая, что если бы не они, то на свете было бы куда больше сломанных судеб, разрушенных семей и оборвавшихся жизней.\n #### Какие породы собак наиболее подходят для ППС\n Наиболее подходящими можно считать немецкую овчарку, ретривера, бордер-колли, бельгийскую овчарку, ризеншнауцера, добермана, ньюфаундленда, русского спаниеля, терьеров. Нужно учесть ещё и то, что служебной собаке приходится работать с людьми разного возраста, подчас очень испуганными (находящимися в состоянии стресса), поэтому пёс должен быть неагрессивным. Территории, на которых ведётся поиск пострадавших, могут быть самыми разнообразными и занимать значительные площади, что требует от собаки хорошей ориентировочной реакцией. Пёс не должен быть трусливым и должен спокойно переносить частые переезды на любом виде транспорта. Трусость, отсутствие активности, недостаточные слух и обоняние, нервозность, боязнь выстрелов, громких звуков и задымлений делают собаку непригодной для поисково-спасательной службы.\n\n Необходимые качества собак для поисково спасательной службы. Выполнение такой сложной и изнурительной работы возможно лишь в том случае, если у собаки великолепные природные данные, которые развиты и усовершенствованы специальной профессиональной подготовкой собак. Для работы в ПСС собака должна обладать отличным слухом, острым чутьём, выносливостью и недюжинной силой.\n\n Желательно, чтобы она была не выше 45–50 см, что облегчит её транспортировку и передвижение в труднодоступных местах. Собака для ПСС должна иметь сильный и уравновешенный характер, хорошо обучаться и доверять людям. Даже незнакомые люди и животные не должны вызывать у неё агрессию. Вялые или наоборот, чрезмерно возбудимые животные, малопригодны для спасательной работы.\n\n Несмотря на то, что ПСС — довольно сложная работа, она не требует подбора собак специальных пород с особыми родословными. Опыт показывает, что хорошо справляются со службой лайки, немецкие овчарки, колли, сенбернары, а также метисы. Что касается возраста, то для тренировки подойдёт не только щенок, но и хорошо развитая собака до двухлетнего возраста.\n\n С учётом специфики работы, дрессировщики используют, как более выносливых и сильных кобелей, так и внимательных и осторожных сук. Не возраст, порода и пол, а грамотная подготовка животных и правильный уход за ними влияют на конечный результат.\n\n Из служебных пород, бесспорно, лучшей для ПСС является колли. Собаки этой породы прекрасно производят все виды поиска, никогда не проявляют агрессивности к незнакомым людям. Они обладают большим «интеллектом», то есть ярко выраженной рассудочной деятельностью. На родине этих собак, в Шотландии, имеется 4 разновидности породы — колли длинношёрстный, гладкошёрстный, бородатый и бордер. Лучшей для поисковой службы является бордер колли. При хорошей видимости эти небольшие собаки (рост в холке — 50 см) работают самостоятельно, находясь от проводника на большом расстоянии.\n\n Вырабатывать у собаки поисковый навык надо с раннего возраста, а дрессировку по курсу ПСС следует начинать с 1–1,5 лет.\n\n К дрессировке собак по специальному курсу поисково-спасательной службы приступают после выработки навыков ОКД, однако интерес к обыску местности и раскапыванию зарытых источников запаха начинают развивать с раннего возраста.',
      lesson_type: 'Lesson',
      tags: "['onto', 'determine', 'avoid', 'yes', 'require']",
      duration: 1,
      additional: false,
      diploma: false,
      breadcrumbs: {
        chapter: {
          id: 1,
          title: 'Глава',
        },
        course: {
          id: 1,
          title: 'Курс',
        },
      },
    },
    4: {
      id: 4,
      course_id: 1,
      chapter_id: 1,
      title: 'Вебинар по теме',
      description: '',
      lesson_type: 'Webinar',
      tags: "['onto', 'determine', 'avoid', 'yes', 'require']",
      duration: 2,
      additional: false,
      diploma: false,
      breadcrumbs: {
        chapter: {
          id: 1,
          title: 'Глава',
        },
        course: {
          id: 1,
          title: 'Курс',
        },
      },
    },
    5: {
      id: 5,
      course_id: 1,
      chapter_id: 1,
      title: 'Тест по теме',
      description: 'Little cold guess somebody guy week.',
      lesson_type: 'Quiz',
      tags: "['onto', 'determine', 'avoid', 'yes', 'require']",
      duration: 2,
      additional: false,
      diploma: false,
      breadcrumbs: {
        chapter: {
          id: 1,
          title: 'Глава',
        },
        course: {
          id: 1,
          title: 'Курс',
        },
      },
    },
  },
};

const coursesLesson = new Promise((resolve) => {
  const [, chapterId, lessonId] =
    window.location.pathname.match(/[1-9]/g) ?? [];
  const chapter = lessons[chapterId] ?? lessons[1];
  resolve(chapter[lessonId] ?? chapter[1]);
});

export default coursesLesson;