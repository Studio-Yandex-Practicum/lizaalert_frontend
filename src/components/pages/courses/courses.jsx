import Accordion from '../../templates/accordion/accordion';
import Card from '../../templates/card/card';

function Courses() {
  return (
    <div>
      <p>Courses page</p>
      <Card>
        <Accordion title="FAQ" button="text">
          Аккордион Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus vero vel expedita quam necessitatibus sit magnam fugit, eos
          harum minima corporis error! Non possimus accusantium temporibus modi
          corporis ratione explicabo animi, voluptas officia nihil nobis et
          nulla quam officiis expedita consequatur delectus iure, quisquam fugit
          est. Earum quam fugiat labore molestias ratione autem exercitationem
          impedit? Veritatis eveniet autem dicta provident? Dignissimos autem,
          excepturi quaerat itaque nemo cupiditate, officia quae quod tenetur
          doloremque magni molestias ea nulla vitae impedit rem praesentium
          perspiciatis natus expedita, debitis amet? Ducimus possimus quaerat
          fuga magni eaque debitis maiores rerum, velit sed corrupti omnis
          blanditiis nostrum.
        </Accordion>
        <Accordion title="FAQ" button="icon">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ex, id
          voluptatem esse necessitatibus commodi deserunt. Enim vero dolores
          amet nostrum sed dignissimos quam obcaecati eveniet, quis minus
          tenetur necessitatibus magni illo. Rerum aspernatur reprehenderit
          consectetur neque architecto aut omnis quibusdam ducimus nostrum in,
          et quas harum laudantium excepturi iusto?
        </Accordion>
      </Card>
    </div>
  );
}

export default Courses;
