const UserData = [
  {
    id: 1,
    author: {
      name: "Mark Webber",
      src: "./assets/avatar-mark-webber.webp",
      href: "#",
    },
    text: "reacted to your recent post",
    link: {
      text: "My first tournament today!",
      href: "#",
    },
    time: "1m ago",
    isUnread: true,
  },
  {
    id: 2,
    author: {
      name: "Angela Gray",
      src: "./assets/avatar-angela-gray.webp",
      href: "#",
    },
    text: "followed you",
    time: "5m ago",
    isUnread: true,
  },
  {
    id: 3,
    author: {
      name: "Jacob Thompson",
      src: "./assets/avatar-jacob-thompson.webp",
      href: "#",
    },
    text: "jas joined your group",
    link: {
      text: "Chess Club",
      href: "#",
    },
    time: "1 day ago",
    isUnread: true,
  },
  {
    id: 4,
    author: {
      name: "Rizky Hasanuddin",
      src: "./assets/avatar-rizky-hasanuddin.webp",
      href: "#",
    },
    text: "sent you a private message",
    privateMessage:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: "5 days ago",
    isUnread: false,
  },
  {
    id: 5,
    author: {
      name: "Kimberly Smith",
      src: "./assets/avatar-kimberly-smith.webp",
      href: "#",
    },
    text: "commented on your picture",
    image: {
      src: "./assets/image-chess.webp",
      alt: "Chess game",
      href: "#",
    },
    time: "1 week ago",
    isUnread: false,
  },
  {
    id: 6,
    author: {
      name: "Nathan Peterson",
      src: "./assets/avatar-nathan-peterson.webp",
      href: "#",
    },
    text: "reacted to your recent post",
    link: {
      text: "5 end-game strategies to increase your win rate",
      href: "#",
    },
    time: "2 weeks ago",
    isUnread: false,
  },
  {
    id: 7,
    author: {
      name: "Anna Kim",
      src: "./assets/avatar-anna-kim.webp",
      href: "#",
    },
    text: "left the group",
    link: {
      text: "Chess Club",
      href: "#",
    },
    time: "2 weeks ago",
    isUnread: false,
  },
];

export default UserData;
