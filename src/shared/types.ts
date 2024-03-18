export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs="contactus"
  }

  
export interface BenefitTypes {
  icon:JSX.Element;
  title:string,
  description:string
}


export interface classesTypes{
  name:string,
  description?:string,
  image:string
}