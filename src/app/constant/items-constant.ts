import { ItemState, ItemTypeState } from "../models/items-models";

export const listOfItemTypes:ItemTypeState[] = [
    { key: 'story', value: 8863 },
    { key: 'comment', value: 2921983 },
    { key: 'ask', value: 121003 },
    { key: 'poll', value: 126809 }
  ];

  export const DefaultItemState: ItemState = {
    by: '',
    id: 0,
    kids: [],
    parent: 0,
    text: '',
    time: '1314218807',
    type: ''
  };
  //TimeStampConfiguration is in seconds
  export const TimeStampConfiguration: number = 150600;