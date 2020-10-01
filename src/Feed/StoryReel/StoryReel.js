import React from 'react';
import Story from './Story/Story';
import * as classes from './StoryReel.module.css';

function StoryReel() {
  return (
    <div className={classes.StoryReel}>
      <Story
        title="Suman Jha"
        image="https://i.pinimg.com/originals/8a/ce/59/8ace59fb64006df42df015203a27864d.jpg"
        profileSrc="https://darresne.com/img/default-avatar.png"
      />
      <Story
        title="Nupur Jha"
        image="https://i.pinimg.com/originals/4b/84/f0/4b84f07aa5eb29a16695fac246f60b91.jpg"
        profileSrc="https://darresne.com/img/female-avatar.png"
      />
      <Story
        title="Saurav Jha"
        image="https://i.pinimg.com/236x/c5/49/54/c54954d4954979dde65bb7e78cc0f2e4.jpg"
        profileSrc="https://www.flaticon.com/svg/static/icons/svg/219/219970.svg"
      />
      <Story
        title="Rupa Jha (Mishra)"
        image="https://i.pinimg.com/236x/23/99/87/2399870213c76387756fddca46fd6bd6.jpg"
        profileSrc="https://darresne.com/img/female-avatar.png"
      />
      <Story
        title="Unnabh Mishra"
        image="https://i.pinimg.com/236x/81/b0/ef/81b0ef03a926e2b3c149dd1632b24d24.jpg"
        profileSrc="https://darresne.com/img/male-avatar.png"
      />
    </div>
  );
}

export default StoryReel;
