import { Ipassenger } from "../model/interface";


export const passengerArray: Array<Ipassenger> = [
    {
      id: 1,
      fullname: 'Nikhil Singe',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: 2,
      fullname: 'Pooja Kalse',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    {
      id: 3,
      fullname: 'Rohan Panchal',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null,
    },
    {
      id: 4,
      fullname: 'Shubham Shilvane',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }],
    },
    {
      id: 5,
      fullname: 'Pradeep Kamble',
      checkedIn: false,
      checkInDate: null,
      children: null,
    },
  ];