import { CoursePart } from "../types";

interface PartProps {
    courseParts: CoursePart;
}

const Part = (props: PartProps) => {
    const assertNever = (value: never): never => {
        throw new Error(
          `Unhandled discriminated union member: ${JSON.stringify(value)}`
        );
      };

    switch (props.courseParts.kind) {
        case 'basic':
            return (
                <div>
                <h2>{props.courseParts.name} {props.courseParts.exerciseCount}</h2>
                {props.courseParts.description}
                </div>
            );
        case 'group':
            return (
                <div>
                <h2>{props.courseParts.name} {props.courseParts.exerciseCount}</h2>
                project exercises: {props.courseParts.groupProjectCount}
                </div>
            );
        case 'background':
            return (
                <div>
                <h2>{props.courseParts.name} {props.courseParts.exerciseCount}</h2>
                {props.courseParts.description}
                {props.courseParts.backgroundMaterial}
                </div>
            )
        default:
            return assertNever(props.courseParts);
            break;
    }
}

export default Part;