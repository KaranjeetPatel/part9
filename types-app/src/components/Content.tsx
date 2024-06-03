import Part from "./Part";
import { CoursePart } from "../types";

interface ContentProps {
    courseParts: CoursePart[];
}

const Content = (props: ContentProps) => {
    return (
        <>
        {props.courseParts.map( part => (
                <>
                <Part key={part.name} courseParts={part} />
                </>
        ))}
        </>
    )
};

export default Content