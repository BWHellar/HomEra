import Cookie from "js-cookie";


export const getAuthToken = () => Cookie.get("token");
export const TOKEN = 'token';
export const MANAGER = 'manager';
export const EXPIRE_TIME = 'expireTime';
export const API_URL = "https://api.example.com";
export const MAX_RESULTS = 10;
export const UNITLIST = [
  {
    label: "Unit 1",
    value: "1",
  },
  {
    label: "Unit 2",
    value: "2",
  },
  {
    label: "Unit 3",
    value: "3",
  },
];
export const PERSONLIST = [
  {
    label: "Billy Bob",
    value: "Billy Bob",
  },
  {
    label: "Johanis Joplin",
    value: "Johanis Joplin",
  },
  {
    label: "Meero Cairo",
    value: "Meero Cairo",
  },
];
export const CARDLIST = [
  {
    label: "*******5434",
    value: "*******5434",
  },
  {
    label: "*******8445",
    value: "*******8445",
  },
  {
    label: "*******2322",
    value: "*******2322",
  },
];
export const BUYPOINTSLIST = [
  {
    label: "20,000 Points for $20",
    value: "20,000 Points for $20",
  },
  {
    label: "50,000 Points for $45",
    value: "50,000 Points for $45",
  },
  {
    label: "100,000 Points for $90",
    value: "100,000 Points for $90",
  },
];
export const AMOUNTLIST = [
  {
    label: "500",
    value: "500",
  },
  {
    label: "1000",
    value: "1000",
  },
  {
    label: "1500",
    value: "1500",
  },
];
export const InvoiceList = [
  {
    label: "Invoices",
    value: "Invoices",
  },
  {
    label: "Debit",
    value: "Debit",
  },
  {
    label: "Credit",
    value: "Credit",
  },
];

export const MonthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
export const MAINTENANCEITEMS = [
  {
    title: "Fridge",
    description: "Item description",
    leftIcon: "fridge",
    rightIcon: "dots-horizontal",
  },
  {
    title: "Doors",
    description: "Item description",
    leftIcon: "door",
    rightIcon: "dots-horizontal",
  },
  {
    title: "Washer",
    description: "Item description",
    leftIcon: "dishwasher",
    rightIcon: "dots-horizontal",
  },

  {
    title: "Faucet",
    description: "Item description",
    leftIcon: "water-pump",
    rightIcon: "dots-horizontal",
  },
  {
    title: "Stove",
    description: "Item description",
    leftIcon: "stove",
    rightIcon: "dots-horizontal",
  },
  {
    title: "Paint",
    description: "Item description",
    leftIcon: "format-paint",
    rightIcon: "dots-horizontal",
  },

  {
    title: "Lightbulb",
    description: "Item description",
    leftIcon: "lightbulb",
    rightIcon: "dots-horizontal",
  },
  {
    title: "Locks",
    description: "Item description",
    leftIcon: "lock",
    rightIcon: "dots-horizontal",
  },
  {
    title: "External",
    description: "Item description",
    leftIcon: "grass",
    rightIcon: "dots-horizontal",
  },

  {
    title: "Windows",
    description: "Item description",
    leftIcon: "window-open-variant",
    rightIcon: "dots-horizontal",
  },
  {
    title: "Trash",
    description: "Item description",
    leftIcon: "delete",
    rightIcon: "dots-horizontal",
  },
  {
    title: "Miscellaneous",
    description: "Item description",
    leftIcon: "domain",
    rightIcon: "dots-horizontal",
  },
];
export const DEFAULT_OPTIONS = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer your-token",
  },
};


export const PERSON_URL = 'https://service-person-oudf2y2rza-uc.a.run.app/person/graphql';
export const LOCATIONAPI = 'https://service-location-manager-oudf2y2rza-uc.a.run.app/location/graphql';


