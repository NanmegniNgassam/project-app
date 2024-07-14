export interface Project {
  id: number;
  title: string;
  content: string;
}

const initState = {
  projects: [
    {
      id: 1,
      title: "PisoftLite official website",
      content: "blah blah blah blah blah blah blah blah",
    },
    {
      id: 2,
      title: "Design and develop my portfolio",
      content: "blah blah blah blah blah blah blah blah",
    },
    {
      id: 3,
      title: "Made the Otaku game",
      content: "blah blah blah blah blah blah blah blah",
    },
  ],
};

const projectReducer = (state = initState, action: unknown) => {
  return state;
};

export default projectReducer;
