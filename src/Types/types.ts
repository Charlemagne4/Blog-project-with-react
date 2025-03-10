import { ReactElement } from 'react';

export interface CarManufacturer {
  name: string;
  following: boolean;
  icon?: ReactElement;
}

export interface Blog {
  id: number;
  title: string;
  desciption: string;
  image: string;
  time: string;
}
