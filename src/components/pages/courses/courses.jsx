import Checkbox from '../../molecules/checkbox/checkbox';

function Courses() {
  return (
    <div>
      <p>Courses page</p>
      <Checkbox onChange={() => {}} value="1" name="1" checked />
      <Checkbox
        onChange={() => {}}
        value="2"
        name="1"
        labelText="Текст ткни меня"
      />
      <Checkbox
        onChange={() => {}}
        value="3"
        name="2"
        isRadio
        labelText="Текст ткни меня"
      />
      <Checkbox
        onChange={() => {}}
        value="4"
        name="2"
        isRadio
        labelText="Текст ткни меня"
      />
    </div>
  );
}

export default Courses;
