import { VerticalFeatureRow } from './VerticalFeatureRow';
import { Section } from './layout/Section';


const VerticalFeatures = () => (
  <Section
    title="Our QA Services"
    description="Why Choose Our Software Testing Services?"
  >
    <VerticalFeatureRow
      title="Comprehensive Testing"
      description="Thorough testing of your software to ensure it meets quality standards."
      image="/assets/images/feature1.jpg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Test Automation"
      description="Automated testing solutions to improve efficiency and accuracy."
      image="/assets/images/feature2.jpg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Performance Testing"
      description="Identify and resolve performance issues to optimize your software's speed and stability."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="Security Testing"
      description="Protect your software from vulnerabilities and ensure data security."
      image="/assets/images/feature4.jpg"
      imageAlt="Third feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Mobile Testing"
      description="Test your mobile applications across various devices"
      image="/assets/images/feature5.jpg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };