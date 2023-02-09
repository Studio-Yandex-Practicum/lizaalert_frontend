import classnames from 'classnames';
import { Card } from 'components/atoms/card';
import { Heading, P } from 'components/atoms/typography';
import { Icon } from 'components/atoms/icon';
import { Accordion } from 'components/molecules/accordion';
import styles from './course-benefits.module.scss';
import { defaultList } from './constants';
import type { CourseBenefitsProps } from './types';

/**
 * Компонент для отображения списка изучаемых навыков курса.
 */

function CourseBenefits({
  benefitsList = defaultList,
  className,
}: CourseBenefitsProps) {
  return (
    <Card className={classnames(styles.benefits, className)} htmlTag="section">
      <Accordion button="text" title="Чему вы научитесь" open>
        <ul className={styles.benefitsList}>
          {benefitsList?.map((item) => (
            <li key={item.id} className={styles.benefit}>
              <Heading level={3} weight="bold" className={styles.heading}>
                <Icon type="checkSolid" />
                <span>{item.title}</span>
              </Heading>

              <P text={item.description} />
            </li>
          ))}
        </ul>
      </Accordion>
    </Card>
  );
}

export default CourseBenefits;
