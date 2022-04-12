import PropTypes from 'prop-types';
import React from 'react';
import Card from '../../templates/card/card';
import Accordion from '../../templates/accordion/accordion';
import Heading from '../../atoms/heading/heading';
import '../../../assets/icons/check-solid.svg';
import { Icon } from '../../atoms';
import './course-benefits.scss';

function CourseBenefits({ benefitsList }) {
  return (
    <Card className="benefits" htmlTag="article">
      <Accordion
        button="text"
        title={<Heading level={2} size="l" title="Чему вы научитесь" />}
        open
      >
        <ul className="content">
          {benefitsList.map((item) => (
            <li key={item.id} className="benefit">
              <Heading level={3} size="m" className="heading">
                <Icon type="checkSolid" className="icon" />
                <span>{item.title}</span>
              </Heading>
              <p className="text">{item.description}</p>
            </li>
          ))}
        </ul>
      </Accordion>
    </Card>
  );
}

CourseBenefits.defaultProps = {
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

CourseBenefits.propTypes = {
  benefitsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default CourseBenefits;
