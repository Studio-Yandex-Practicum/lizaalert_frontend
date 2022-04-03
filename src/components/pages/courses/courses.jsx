import Filter from '../../organisms/filter/filter';
import styles from './courses.module.scss';

function Courses() {
  return (
    <div className="container">
      <h2 className={`heading h1 ${styles.heading}`}>Курсы</h2>
      <div className={styles.courses}>
        <Filter className={styles.filters} />
        <ul className={styles.list} />
      </div>
    </div>
  );
}

export default Courses;
