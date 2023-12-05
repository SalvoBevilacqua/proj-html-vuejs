import { reactive } from "vue";

export const store = reactive({
    headerList: ["Home", "Pages", "Courses", "Features", "Blog", "Shop"],
    buildCardInfo: [
        {
            title: "Idea Discussion",
            text: "Get teamed up with the specialists who work and teach coding for years at famous universities",
            img: "home-5-image-box-01"
        },
        {
            title: "Web Development",
            text: "Learn to start building a webpage from scratch. You decide your own pace, course and speed.",
            img: "home-5-image-box-02"
        },
        {
            title: "System Administration",
            text: "Learners are encouraged to study the mechanism and structure of system administration.",
            img: "home-5-image-box-03"
        },
        {
            title: "Graphic Design",
            text: "Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness.",
            img: "home-5-image-box-04"
        }
    ],
    numbersInfo: [
        {
            num: "1926",
            string: "finished session"
        },
        {
            num: "3.092+",
            string: "enrolled learners"
        },
        {
            num: "200",
            string: "online instructors"
        },
        {
            num: "100%",
            string: "satisfaction rate"
        },
    ],
    titleSections: [
        {
            titleSec: "build",
            titleMono: "start learning coding languages",
            titlePurple: "build your dream today",
            titleGreen: "today"
        },
        {
            titleSec: "courses",
            titleMono: "choose where you'd like to begin",
            titlePurple: "latest featured",
            titleGreen: "courses"
        },
        {
            titleSec: "learn_one",
            titleMono: "why hesitate to register?",
            titlePurple: "learn at your own",
            titleGreen: "pace"
        },
        {
            titleSec: "learn_two",
            titleMono: "what are you looking for?",
            titlePurple: "learn on your",
            titleGreen: "mobile"
        },
        {
            titleSec: "event",
            titleMono: "get in contact now",
            titlePurple: "upcoming",
            titleGreen: "events"
        },
        {
            titleSec: "opinions",
            titleMono: "people are praising maxcoach",
            titlePurple: "what make they",
            titleGreen: "love us?"
        }
    ],
    coursesCardInfo: [
        {
            title: "Learning to Write as a Professional Author",
            name: "Blanche Fields",
            nameImg: "73ee246daf47502812ccefc84bf02898.jpeg",
            img: "course-02-480x298.jpg",
            price: "$40.00",
            lessons: "20",
            students: "50"

        },
        {
            title: "Customer-centric Info-Tech Strategies",
            name: "Maggie Strickland",
            nameImg: "d0d504142acfde820eef2f11feea6253.jpeg",
            img: "stock-full-hd-03-480x298.jpg",
            price: "Free",
            lessons: "24",
            students: "769"
        },
        {
            title: "Opening Programming Courses for Everyone: Python",
            name: "Maggie Strickland",
            nameImg: "d0d504142acfde820eef2f11feea6253.jpeg",
            img: "stock-full-hd-04-480x298.jpg",
            price: "$19.00",
            lessons: "17",
            students: "62"
        },
        {
            title: "Academic Listening and Note-taking",
            name: "Blanche Fields",
            nameImg: "73ee246daf47502812ccefc84bf02898.jpeg",
            img: "stock-full-hd-06-480x298.jpg",
            price: "$26.00",
            lessons: "14",
            students: "67"
        },
        {
            title: "Master jQuery in a short Period of Time",
            name: "Blanche Fields",
            nameImg: "73ee246daf47502812ccefc84bf02898.jpeg",
            img: "course-featured-image-01-480x298.jpg",
            price: "$39.00",
            lessons: "6",
            students: "51"
        },
        {
            title: "Introducing to Javascript for Beginners",
            name: "Blanche Fields",
            nameImg: "73ee246daf47502812ccefc84bf02898.jpeg",
            img: "stock-full-hd-05-480x298.jpg",
            price: "$59.00",
            lessons: "14",
            students: "76"
        },
    ],
})