//destrcutring
const course={
    courseName:"js",
    coursePrice:999,
    courseInstrcutor:"sritam"
}

// const {courseInstrcutor}=course
// console.log(courseInstrcutor)
const {courseInstrcutor:instructor}=course
console.log(instructor)