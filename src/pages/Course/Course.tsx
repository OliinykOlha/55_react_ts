import { CourseWrapper, Title, Topics } from "./styles";

function Course () {
    return (
    <CourseWrapper>
        <Title>Course</Title>
        <Topics>
           {`1. React: Object Types, export/import.
            2. React: Сomponent typing, map.
            3. React: Children.
            4. React: Styling components.
            5. React: useEffect & useState.
            6. React: server requests, axios.
            7. React: Formik, Yup.`}
        </Topics>
    </CourseWrapper>
    )
}

export default Course;