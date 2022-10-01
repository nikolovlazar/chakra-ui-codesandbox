export type Message = {
  id: number;
  from: 'sender' | 'recipient';
  type: 'text' | 'media';
  date: string;
  name?: string;
  avatar?: string;
  text?: string;
  fileType?: string;
  fileName?: string;
  fileSize?: string;
  fileDate?: string;
};

export const messages: Message[] = [
  {
    id: 1,
    type: 'text',
    text: 'Awesome, thank you!',
    from: 'recipient',
    name: 'Kathryn Murphy',
    avatar: 'kathryn-murphy.jpg',
    date: 'Today at 9:45am',
  },
  {
    id: 2,
    type: 'media',
    fileName: 'Brand Guidelines.pdf',
    fileType: 'pdf',
    fileSize: '238 KB',
    fileDate: '22 Jun, 2022',
    from: 'sender',
    date: 'Today at 9:42am',
  },
  {
    id: 3,
    type: 'text',
    text: 'Great meeting! Would you mind sharing the brand guide they sent?',
    from: 'recipient',
    name: 'Kathryn Murphy',
    avatar: 'kathryn-murphy.jpg',
    date: 'Today at 9:37am',
  },
  {
    id: 4,
    type: 'text',
    text: 'No worries, take your time!',
    from: 'sender',
    date: 'Yesterday at 8:59am',
  },
  {
    id: 5,
    type: 'text',
    text: 'Thank you, I appreciate the help!',
    from: 'recipient',
    name: 'Kathryn Murphy',
    avatar: 'kathryn-murphy.jpg',
    date: 'Yesterday at 8:58am',
  },
  {
    id: 6,
    type: 'text',
    text: "Sure, that's no problem!",
    from: 'sender',
    date: 'Yesterday at 8:57am',
  },
  {
    id: 7,
    type: 'text',
    text: 'Would you mind taking notes until I get there?',
    from: 'recipient',
    name: 'Kathryn Murphy',
    avatar: 'kathryn-murphy.jpg',
    date: 'Yesterday at 8:45am',
  },
  {
    id: 8,
    type: 'text',
    text: 'Good morning! I’ll be a little late to our meeting today!',
    from: 'recipient',
    name: 'Kathryn Murphy',
    avatar: 'kathryn-murphy.jpg',
    date: 'Yesterday at 8:43am',
  },
];
