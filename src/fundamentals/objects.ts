let employee: {
  id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: 'Raizo',
  retire: (date: Date) => {
    console.log(date);
  },
};

// for optional property
/*
let employee: {
  id: number;
  name: string;
  phone?: number;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: 'Raizo',
  retire: (date: Date) => {
    console.log(date);
  },
};
*/

// sometime we wanna make certain property readyonly so we dont accidently change them later, here we set id propert as readonly
/*
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: 'Raizo',
  retire: (date: Date) => {
    console.log(date);
  },
};
*/
