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
    ]
})