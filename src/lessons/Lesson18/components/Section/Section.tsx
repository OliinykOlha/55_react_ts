import Content from "../Content/Content"
import { SectionTitle, SectionWrapper } from "./styles"
// import { SectionProps } from "./types"

// Пример  с пропс дрилинг
// function Section({data}: SectionProps) {
//   return (
//     <SectionWrapper>
//       <SectionTitle>Section Block</SectionTitle>
//       <Content userData={data} />
//     </SectionWrapper>
//   )
// }

function Section() {
  return (
    <SectionWrapper>
      <SectionTitle>Section Block</SectionTitle>
      <Content />
    </SectionWrapper>
  )
}

export default Section