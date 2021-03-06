import { trigger, transition, style, animate, AnimationTriggerMetadata } from '@angular/animations';

export function headerAnimation(): AnimationTriggerMetadata {
    return trigger('headerAnimation', [
        transition('void => *', [
          style({ opacity: 0, height: '0rem' }),
          animate(`300ms ease`),
          style({ opacity: 1, height: '16rem' }),
        ]),
        transition('* => void', [
          animate(`300ms ease`),
          style({ opacity: 0, height: '0rem' }),
        ]),
      ]);   
}

export function opacityAnimation(): AnimationTriggerMetadata {
  return trigger('opacityAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(`300ms ease`),
        style({ opacity: 1 }),
      ]),
      transition('* => void', [
        animate(`300ms ease`),
        style({ opacity: 0 }),
      ]),
    ]);   
}