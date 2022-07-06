import { Card, Heading, Icon } from '../../atoms';
import { Accordion } from '../../molecules';
import styles from './course-benefits.module.scss';

export type BenefitType = {
  id: number;
  title: string;
  description: string;
};

type CourseBenefitsProps = {
  benefitsList?: BenefitType[];
};

const defaultProps = {
  benefitsList: [
    {
      id: 0,
      title: 'Поисково-спасательная работа',
      description:
        'Оказание помощи гражданам, оказавшимся в зонах бедствия или пропавшим в безлюдной местности',
    },
    {
      id: 1,
      title: 'Следовая работа',
      description:
        'Обучение животного идти как по горячему, так и по остывшему следу',
    },
    {
      id: 2,
      title: 'Поиск тел погибших',
      description:
        'Поиск тел и их остатков с применением специально обученных собак',
    },
  ],
};

/**
 * @description Компонент тем курса
 *
 * @props
 * benefitsList - arr - массив объектов. Объект темы содержит id, title, description
 * toggleRender - function - функция возврата к тесту
 */

function CourseBenefits({ benefitsList }: CourseBenefitsProps) {
  return (
    <Card className={styles.benefits} htmlTag="article">
      <Accordion
        className={styles.title}
        button="text"
        title="Чему вы научитесь"
        open
      >
        <ul className={styles.benefitsList}>
          {benefitsList.map((item) => (
            <li key={item.id} className={styles.benefit}>
              <Heading level={3} size="m" className={styles.heading}>
                <Icon type="checkSolid" className={styles.icon} />
                <span>{item.title}</span>
              </Heading>
              <p className={styles.text}>{item.description}</p>
            </li>
          ))}
        </ul>
      </Accordion>
    </Card>
  );
}

CourseBenefits.defaultProps = defaultProps;

export default CourseBenefits;
