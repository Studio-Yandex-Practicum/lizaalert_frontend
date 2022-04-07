# Добавление новых иконок

Правило: все новые иконки должны быть оптимизированы (например, сервисом https://svgoptimizer.com/), а также почищены от свойств `width`, `height`, `fill` и прочих лишних.

В идеале разметка должна выглядеть так:
```
<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 7H9V1a1 1 0 0 0-2 0v6H1a1 1 0 0 0 0 2h6v6a1 1 0 1 0 2 0V9h6a1 1 0 1 0 0-2z"/>
</svg>
```

Новые иконки нужно добавить в объект `icons` по ключу, соответствующему названию компонента.

По возможности использовать всегда компонент `Icon` для помещения иконки в разметку.

## Справочник иконок
<table>
  <tr>
    <td>
      <img width="130" height="50" src="../../../assets/icons/arrow-back.svg">
      <p align="center">arrowBack</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/arrow-forward.svg">
      <p align="center">arrowForward</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/arrow-down.svg">
      <p align="center">arrowDown</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/arrow-left.svg">
      <p align="center">arrowLeft</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/arrow-right.svg">
      <p align="center">arrowRight</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/arrow-up.svg">
      <p align="center">arrowUp</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/attachment.svg">
      <p align="center">attachment</p>
    </td>
  </tr>
  <tr>
    <td>
      <img width="130" height="50" src="../../../assets/icons/calendar.svg">
      <p align="center">calendar</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/check.svg">
      <p align="center">check</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/check-solid.svg">
      <p align="center">checkSolid</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/checkbox.svg">
      <p align="center">checkbox</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/course.svg">
      <p align="center">course</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/cycle.svg">
      <p align="center">cycle</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/document.svg">
      <p align="center">document</p>
    </td>
  </tr>
  <tr>
    <td>
      <img width="130" height="50" src="../../../assets/icons/drag-circle.svg">
      <p align="center">dragCircle</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/drag-handle.svg">
      <p align="center">dragHandle</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/duration.svg">
      <p align="center">duration</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/edit.svg">
      <p align="center">edit</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/exclamation-mark.svg">
      <p align="center">exclamationMark</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/eye.svg">
      <p align="center">eye</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/fullscreen.svg">
      <p align="center">fullscreen</p>
    </td>
  </tr>
  <tr>
    <td>
      <img width="130" height="50" src="../../../assets/icons/history.svg">
      <p align="center">history</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/info.svg">
      <p align="center">info</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/lessons.svg">
      <p align="center">lessons</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/library.svg">
      <p align="center">library</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/link.svg">
      <p align="center">link</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/logout.svg">
      <p align="center">logout</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/notification.svg">
      <p align="center">notification</p>
    </td>
  </tr>
  <tr>
    <td>
      <img width="130" height="50" src="../../../assets/icons/play.svg">
      <p align="center">play</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/plus.svg">
      <p align="center">plus</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/radio.svg">
      <p align="center">radio</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/rank.svg">
      <p align="center">rank</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/retry.svg">
      <p align="center">retry</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/role.svg">
      <p align="center">role</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/send.svg">
      <p align="center">send</p>
    </td>
  </tr>
  <tr>
    <td>
      <img width="130" height="50" src="../../../assets/icons/settings.svg">
      <p align="center">settings</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/test.svg">
      <p align="center">test</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/text-bold.svg">
      <p align="center">textBold</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/text-list-bullet.svg">
      <p align="center">textListBullet</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/text-list-numbered.svg">
      <p align="center">textListNumbered</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/time.svg">
      <p align="center">time</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/trash.svg">
      <p align="center">trash</p>
    </td>
  </tr>
  <tr>
    <td>
      <img width="130" height="50" src="../../../assets/icons/upload.svg">
      <p align="center">upload</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/user.svg">
      <p align="center">user</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/user-circle.svg">
      <p align="center">userCircle</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/user-square.svg">
      <p align="center">userSquare</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/users.svg">
      <p align="center">users</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/video.svg">
      <p align="center">video</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/volume.svg">
      <p align="center">volume</p>
    </td>
  </tr>
  <tr>
    <td>
      <img width="130" height="50" src="../../../assets/icons/webinar.svg">
      <p align="center">webinar</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/x-small.svg">
      <p align="center">xSmall</p>
    </td>
    <td>
      <img width="130" height="50" src="../../../assets/icons/x-solid.svg">
      <p align="center">xSolid</p>
    </td>
  </tr>
</table>
