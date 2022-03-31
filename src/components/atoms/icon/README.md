## Добавление новых иконок

Правило: все новые иконки должны быть оптимизированы (например, сервисом https://svgoptimizer.com), а также почищены от свойств `width`, `height`, `fill` и прочих лишних.

В идеале разметка должна выглядеть так:
```
<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.657 15.071.293 8.707a1 1 0 0 1 0-1.414L6.657.93A1 1 0 0 1 8.07 2.343L3.414 7H15a1 1 0 1 1 0 2H3.414l4.657 4.657a1 1 0 1 1-1.414 1.414z"/>
</svg>
```

Новые иконки нужно добавить в объект `icons` по ключу, соответствующему названию компонента.

По возможности использовать всегда компонент `Icon` для помещения иконки в разметку.

## Справочник иконок
<div style="display: grid; grid-template-columns: repeat(auto-fit, 150px)">
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/arrow-back.svg" alt="arrowBack"/>
    <p style="margin: 5px 0 0">arrowBack</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/arrow-forward.svg" alt="arrowForward"/>
    <p style="margin: 5px 0 0">arrowForward</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/arrow-down.svg" alt="arrowDown"/>
    <p style="margin: 5px 0 0">arrowDown</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/arrow-left.svg" alt="arrowLeft"/>
    <p style="margin: 5px 0 0">arrowLeft</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/arrow-right.svg" alt="arrowRight"/>
    <p style="margin: 5px 0 0">arrowRight</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/arrow-up.svg" alt="arrowUp"/>
    <p style="margin: 5px 0 0">arrowUp</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/attachment.svg" alt="attachment"/>
    <p style="margin: 5px 0 0">attachment</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/calendar.svg" alt="calendar"/>
    <p style="margin: 5px 0 0">calendar</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/check.svg" alt="check"/>
    <p style="margin: 5px 0 0">check</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/check-solid.svg" alt="checkSolid"/>
    <p style="margin: 5px 0 0">checkSolid</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/checkbox.svg" alt="checkbox"/>
    <p style="margin: 5px 0 0">checkbox</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/course.svg" alt="course"/>
    <p style="margin: 5px 0 0">course</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/cycle.svg" alt="cycle"/>
    <p style="margin: 5px 0 0">cycle</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/document.svg" alt="document"/>
    <p style="margin: 5px 0 0">document</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/drag-circle.svg" alt="dragCircle"/>
    <p style="margin: 5px 0 0">dragCircle</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/drag-handle.svg" alt="dragHandle"/>
    <p style="margin: 5px 0 0">dragHandle</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/duration.svg" alt="duration"/>
    <p style="margin: 5px 0 0">duration</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/edit.svg" alt="edit"/>
    <p style="margin: 5px 0 0">edit</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/exclamation-mark.svg" alt="exclamationMark"/>
    <p style="margin: 5px 0 0">exclamationMark</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/eye.svg" alt="eye"/>
    <p style="margin: 5px 0 0">eye</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/fullscreen.svg" alt="fullscreen"/>
    <p style="margin: 5px 0 0">fullscreen</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/history.svg" alt="history"/>
    <p style="margin: 5px 0 0">history</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/info.svg" alt="info"/>
    <p style="margin: 5px 0 0">info</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/lessons.svg" alt="lessons"/>
    <p style="margin: 5px 0 0">lessons</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/library.svg" alt="library"/>
    <p style="margin: 5px 0 0">library</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/link.svg" alt="link"/>
    <p style="margin: 5px 0 0">link</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/logout.svg" alt="logout"/>
    <p style="margin: 5px 0 0">logout</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/notification.svg" alt="notification"/>
    <p style="margin: 5px 0 0">notification</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/play.svg" alt="play"/>
    <p style="margin: 5px 0 0">play</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/plus.svg" alt="plus"/>
    <p style="margin: 5px 0 0">plus</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/radio.svg" alt="radio"/>
    <p style="margin: 5px 0 0">radio</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/rank.svg" alt="rank"/>
    <p style="margin: 5px 0 0">rank</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/retry.svg" alt="retry"/>
    <p style="margin: 5px 0 0">retry</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/role.svg" alt="role"/>
    <p style="margin: 5px 0 0">role</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/send.svg" alt="send"/>
    <p style="margin: 5px 0 0">send</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/settings.svg" alt="settings"/>
    <p style="margin: 5px 0 0">settings</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/test.svg" alt="test"/>
    <p style="margin: 5px 0 0">test</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/text-bold.svg" alt="textBold"/>
    <p style="margin: 5px 0 0">textBold</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/text-list-bullet.svg" alt="textListBullet"/>
    <p style="margin: 5px 0 0">textListBullet</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/text-list-numbered.svg" alt="textListNumbered"/>
    <p style="margin: 5px 0 0">textListNumbered</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/time.svg" alt="time"/>
    <p style="margin: 5px 0 0">time</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/trash.svg" alt="trash"/>
    <p style="margin: 5px 0 0">trash</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/upload.svg" alt="upload"/>
    <p style="margin: 5px 0 0">upload</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/user.svg" alt="user"/>
    <p style="margin: 5px 0 0">user</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/user-circle.svg" alt="userCircle"/>
    <p style="margin: 5px 0 0">userCircle</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/user-square.svg" alt="userSquare"/>
    <p style="margin: 5px 0 0">userSquare</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/users.svg" alt="users"/>
    <p style="margin: 5px 0 0">users</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/video.svg" alt="video"/>
    <p style="margin: 5px 0 0">video</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/volume.svg" alt="volume"/>
    <p style="margin: 5px 0 0">volume</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/webinar.svg" alt="webinar"/>
    <p style="margin: 5px 0 0">webinar</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/x-small.svg" alt="xSmall"/>
    <p style="margin: 5px 0 0">xSmall</p>
  </div>
  <div style="text-align: center; border: 1px solid black; padding: 7px">
    <img width="50" height="50" src="../../../assets/icons/x-solid.svg" alt="xSolid"/>
    <p style="margin: 5px 0 0">xSolid</p>
  </div>
</div>

