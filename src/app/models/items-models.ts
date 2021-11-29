export interface ItemState {
    by: string;
    id: number;
    kids?: number[];
    parent: number;
    text: string;
    time: string;
    type: string;
  }
  export interface ItemTypeState {
    key: string;
    value: number;
  }