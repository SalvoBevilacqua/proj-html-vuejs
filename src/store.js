import { reactive } from "vue";

export const store = reactive({
    stringToSearch: "",
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
            titlePurple: "Build Your Dream",
            titleGreen: "today"
        },
        {
            titleSec: "courses",
            titleMono: "choose where you'd like to begin",
            titlePurple: "Latest Featured",
            titleGreen: "courses"
        },
        {
            titleSec: "learn_one",
            titleMono: "why hesitate to register?",
            titlePurple: "Learn at your own",
            titleGreen: "Pace"
        },
        {
            titleSec: "learn_two",
            titleMono: "what are you looking for?",
            titlePurple: "Learn on your",
            titleGreen: "mobile"
        },
        {
            titleSec: "event",
            titleMono: "get in contact now",
            titlePurple: "Upcoming",
            titleGreen: "Events"
        },
        {
            titleSec: "opinions",
            titleMono: "people are praising maxcoach",
            titlePurple: "What make they",
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
    learnList: ["Select & customize courses to your preferences", "Change the tutor and make arrangements", "Partecipate in events to join others", "Get the desider certificate delivered at house"],
    eventCardInfo: [
        {
            where: "Texas, US",
            name: "Storytelling Workshop",
            day: "22",
            mth: "NOV",
        },
        {
            where: "New York, US",
            name: "Painting Art Contest 2020",
            day: "10",
            mth: "OCT",
        },
        {
            where: "Hamburg, Germany",
            name: "International Art Fair 2020",
            day: "23",
            mth: "NOV",
        },
        {
            where: "Illinois, US",
            name: "Street Performance: Call for Artist",
            day: "15",
            mth: "DEC",
        },
        {
            where: "Illinois. US",
            name: "Consumer Food Safety Education Conference",
            day: "22",
            mth: "JUL",
        },
        {
            where: "Dubay",
            name: "How meditation improve your mental health?",
            day: "12",
            mth: "AUG",
        }
    ],
    opinionsCardInfo: [
        {
            text: "I am free to learn at my own pace, follow my own schedule and choose the subject i like. Great study portal for people like me.",
            name: "mina hollace",
            pos: "/ Freelancer",
            img: "testimonial-avata-02.jpg"
        },
        {
            text: "MaxCoach is my best choise. Their tutors are smart and professional when dealing with students.",
            name: "madley pondor",
            pos: "/ IT Specialist",
            img: "testimonial-avata-04.jpg"
        },
        {
            text: "I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation.",
            name: "luvic dubble",
            pos: "/ Private Tutor",
            img: "testimonial-avata-01.jpg"
        }
    ],
    footerAddress: ["382 NE 191st ST # 87394 Miami, FL 33179-3899", "+1 (305) 547-9909 (9-am -5pm EST, Monday - Friday)", "support@maxcoach.com"],
    footerExplore: ["Start here", "Blog", "About us", "Success story", "Courses", "Contact us"],
    footerInfo: ["Membership", "Purchase guide", "Privacy policy", "Term os services"]
})