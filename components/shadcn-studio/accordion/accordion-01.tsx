import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const items = [
  {
    title: '1. What courses does Arena Animation offer?',
    content: `Arena Animation offers courses in the media and entertainment domain, including Animation (2D & 3D), VFX (Visual Effects), Game Design, Graphic Design, Web Design & Development, UI/UX, and Digital Marketing. Programs may range from short-term certifications to long-term degree-oriented courses.`
  },
  {
    title: '2. Which industries are these courses related to?',
    content:
      'The courses are aligned with the AVGC (Animation, VFX, Gaming, and Comics) sector and are designed to cater to film, television, gaming, and digital media platforms.'
  },
  {
    title: '3. What topics are generally covered in Animation and VFX courses?',
    content:
      'Depending on the program, areas such as character design, storyboarding, compositing, rotoscopy, matte painting, 3D modeling, rigging, lighting, texturing, and motion graphics may be included.'
  },
  {
    title: '4. What software and tools are introduced during the courses?',
    content:
      'Courses may involve exposure to industry-relevant software such as Maya, 3ds Max, Photoshop, Illustrator, InDesign, Unreal Engine, and other tools, subject to curriculum updates.'
  },
  {
    title: '5. Are there courses related to gaming and AR/VR?',
    content:
      'Yes, course offerings may include Game Design, Game Art, Game Development, and AR/VR-related modules, depending on the selected program.'
  },
  {
    title: '6. What types of course formats are available?',
    content:
      'Programs may be offered as degree-linked courses (often in collaboration with universities), diploma or certificate courses, as well as short-term or fast-track programs focused on specific skills.'
  },
  {
    title: '7. What skills can students expect to develop?',
    content:
      'Students may gain exposure to design fundamentals, storytelling, cinematography, color theory, and industry production pipelines such as pre-production, post-production, asset creation, and character rigging.'
  },
  {
    title: '8. Are these courses career-oriented?',
    content:
      'The courses are designed with a focus on practical learning and portfolio development for opportunities across animation studios, gaming companies, production houses, and digital agencies, subject to individual performance and industry conditions.'
  }
]


const AccordionDemo = () => {
  return (
    <div className='container mx-auto px-4 my-12'>
      <h2 className='text-4xl mb-8 font-bold'>FAQ's</h2>
      <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent className='text-muted-foreground'>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default AccordionDemo
