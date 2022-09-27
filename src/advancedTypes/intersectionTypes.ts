/* we have another technique to combine types call intersection */

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

// Now we have two separate types, and using a intersection type we can combine them into a new type
type UIWidget = Draggable & Resizable;

// to initialize a object we need to impliment all members of Draggable and Resizable
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
