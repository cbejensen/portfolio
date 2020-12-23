const colors = require("tailwindcss/colors");

module.exports = {
  firstName: "Christian",
  lastName: "Jensen",
  intro:
    "Hello! My name is Christian, and I am a web developer. I graduated from DevMountain - a coding bootcamp - in 2015, and have been building things ever since. I currently work with FedEx using Angular. I also have a lot of experience with React, and love JavaScript in general.\n\nIf you are interested in working with me, please reach out!",
  sections: [
    {
      type: "default",
      title: "Projects",
      items: [
        {
          title: "Wishfull",
          subtitle: "Web app for wish lists",
        },
      ],
    },
    {
      type: "timeline",
      title: "Experience",
      items: [
        {
          title: "FedEx",
          subtitle: "Jan 2019 - Present",
        },
      ],
    },
  ],
  colors: {
    primary: colors.blue[500],
    profileBorder: colors.orange[700],
  },
};
