import HeaderText from "@/shared/HeaderText";
import { SelectedPage, classesTypes } from "@/shared/types"
import { motion } from "framer-motion";
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import ClassesDescription from "./ClassesDescription";





interface Props {
    setSelectedPage: (value:SelectedPage)=>void;
}

const Listclasses:Array<classesTypes>=[{
    name:"Weight Training",
    description: "Boost strength and muscle tone through targeted exercises. Achieve powerful gains with expert-led weightlifting in a motivating, goal-oriented environment.",
    image:image1
},
{
    name:"Yoga Classes",
    description:"Experience tranquility and flexibility in Yoga classes. Strengthen your mind-body connection with postures and breathwork in serene, focused sessions.",
    image:image2
},
{
    name:"Ab Core Classes",
    description: "Sculpt and strengthen your core with intense ab workouts. These sessions focus on tightening your midsection for better posture and balance.",
    image:image3
},
{
    name:"Adventure Classes:",
    description:"Embark on thrilling workouts with our Adventure classes. They simulate outdoor challenges, merging fitness with the excitement of the wild.",
    image:image4
},
{
    name:"Fitness Classes",
    description: "Elevate your fitness level with dynamic routines. These energetic classes offer a blend of cardio, strength, and endurance training for all-around ",
    image:image5
},
{
    name:"Training Classes",
    description:"Comprehensive training classes designed to refine your technique, enhance stamina, and boost overall athleticism, tailored to your fitness aspirations.",
    image:image6
}



]

const OurClasses = ({setSelectedPage}: Props) => {
    return (
        <section
        id="ourclasses"
        className="w-full bg-primary-100  
        py-40 
        px-16 
        "
        >
        <motion.div
        onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once:true,
                amount:0.5}}
                transition={{delay:0.2,duration:0.5}}
                variants={{
                    hidden:{opacity:0,x:-50},
                    visible:{opacity:1,x:0}
                }}
                className="mx-auto w-5/6"
            >
                <HeaderText
                >
                    OUR CLASSES
                </HeaderText>
                <p 
                className="py-5"
                >
                Find your groove with our wide range of classes! Whether it's the intensity of spin, the harmony of yoga, or the energy of dance, there's a class to ignite your passion. Expert instructors, supportive peers, and an empowering atmosphere await—every class a step toward your best self.
                </p>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                   {
                    
                    Listclasses.map((element:classesTypes,index)=>( 
                        <ClassesDescription
                        key={`${element.name}-${index}`}
                        name={element.name}
                        desription={element.description}
                        image={element.image}
                        />
                    ))



                   }
                </ul>
            </div>
            <div>
               
            </div>
        </motion.div>
        </section>
    )
}

export default OurClasses
