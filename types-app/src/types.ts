export interface CoursePartBase {
    name: string;
    exerciseCount: number;
  }

export interface CoursePartBasePlus extends CoursePartBase {
    description: string;
  }
  
export interface CoursePartBasic extends CoursePartBasePlus {
    kind: "basic"
  }
  
export interface CoursePartGroup extends CoursePartBase {
    groupProjectCount: number;
    kind: "group"
  }
  
export interface CoursePartBackground extends CoursePartBasePlus {
    backgroundMaterial: string;
    kind: "background"
  }
  
export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground;