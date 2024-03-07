import {} from '../components/ListItem';
import { type ListInfo, type Theme, type ListContent } from '../components/List';

const indigo: Theme = {
    background: "bg-blue-200",
    foreground: "bg-indigo-700",
    opacity: "bg-opacity-25"
};

const emerald: Theme = {
    background: "bg-green-300",
    foreground: "bg-emerald-700",
    opacity: "bg-opacity-25"
};

const g1: ListContent = {
    title: "Baking",
    content: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    due_date: "January 1, 2024",
    notes: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    collapsed: false,
    children: false,
}

const g2: ListContent = {
    title: "Pasta",
    content: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    due_date: "January 1, 2024",
    notes: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    collapsed: false,
    children: false,
}

const hw1a: ListContent = {
    title: "Lattice Theory Problem Set",
    content: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    due_date: "January 1, 2024",
    notes: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    collapsed: false,
    children: false,
}

const hw1b: ListContent = {
    title: "Lattice Theory Problem Set",
    content: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    due_date: "January 1, 2024",
    notes: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    collapsed: false,
    children: false,
}

const hw1: ListContent = {
    title: "Lattice Theory Problem Set",
    content: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    due_date: "January 1, 2024",
    notes: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    collapsed: false,
    children: [hw1a, hw1b],
}

const hw2a: ListContent = {
    title: "Lattice Theory Problem Set",
    content: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    due_date: "January 1, 2024",
    notes: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    collapsed: false,
    children: false,
}

const hw2b: ListContent = {
    title: "Lattice Theory Problem Set",
    content: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    due_date: "January 1, 2024",
    notes: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    collapsed: false,
    children: false,
}

const hw2: ListContent = {
    title: "Data Structures Assignment",
    content: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    due_date: "January 1, 2024",
    notes: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    collapsed: false,
    children: [hw2a, hw2b]
}

const hw3aa: ListContent = {
    title: "Lattice Theory Problem Set",
    content: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    due_date: "January 1, 2024",
    notes: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    collapsed: false,
    children: false,
}

const hw3ab: ListContent = {
    title: "Lattice Theory Problem Set",
    content: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    due_date: "January 1, 2024",
    notes: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    collapsed: false,
    children: false,
}

const hw3a: ListContent = {
    title: "Lattice Theory Problem Set",
    content: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    due_date: "January 1, 2024",
    notes: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    collapsed: false,
    children: [hw3aa, hw3ab]
}

const hw3b: ListContent = {
    title: "Lattice Theory Problem Set",
    content: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    due_date: "January 1, 2024",
    notes: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    collapsed: false,
    children: false,
}

const hw3: ListContent = {
    title: "Abstract Algebra Practice Test",
    content: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    due_date: "January 1, 2024",
    notes: "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.",
    collapsed: false,
    children: [hw3a, hw3b]
}

const test_list1: ListInfo = {
    header: "Groceries",
    description: "What I need at the store", 
    items: [g1, g2],
    theme: emerald
}

const test_list2: ListInfo = {
    header: "Homework",
    description: "Assignments for classes",
    items: [hw1, hw2, hw3],
    theme: indigo,
}

const lists_for_testing: ListInfo[] = [test_list1, test_list2]

export default lists_for_testing;