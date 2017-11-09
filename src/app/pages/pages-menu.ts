import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Quizzes',
    icon: 'nb-keypad',
    children: [
      {
        title: 'View available Quizzes',
        link: '/pages/viewquiz',
      },
      {
        title: 'Create a new Quiz',
        link: '/pages/addquiz',
      },
      {
        title: 'Edit an existing Quiz',
        link: '/pages/editquiz',
      },
      {
        title: 'Delete an existing Quiz',
        link: '/pages/deletequiz',
      },
      {
        title: 'Take a Quiz',
        link: '/pages/takequiz',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
      {
        title: 'Logout',
        link: '/auth/login',
      },

    ],
  },
];
