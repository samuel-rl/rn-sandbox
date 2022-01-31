import { Dimensions } from "react-native";

export interface Item {
  title: string;
  subtitle: string;
  picture: any;
}

export const items: Item[] = [
  {
    title: "Pedro Lastra",
    subtitle: "Chicago, United States",
    picture: {uri: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2744&q=80"},
  },
  {
    title: "Andrea Cau",
    subtitle: "New York, United States",
    picture: {uri: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"},
  },
  {
    title: "Henning Witzel",
    subtitle: "Los Angeles, United States",
    picture: {uri: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"},
  },
  {
    title: "Matt Jones",
    subtitle: "Saint Paul, United States",
    picture: {uri: "https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"},
  },
  {
    title: "Daniele Colucci",
    subtitle: "El Acebo, Spagna",
    picture: {uri: "https://images.unsplash.com/photo-1597739239353-50270a473397?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"},
  },
  {
    title: "Jonas Hoss",
    subtitle: "Spain, Málaga",
    picture: {uri: "https://images.unsplash.com/photo-1549643276-fdf2fab574f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"},
  },
  {
    title: "Benjamin Suter",
    subtitle: "Chicago, IL, USA",
    picture: {uri: "https://images.unsplash.com/photo-1579032320705-b5777e7b91ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"},
  },
];

export const { width, height } = Dimensions.get("window");

export const MIN_HEIGHT = 128;
export const MAX_HEIGHT = height / 2;