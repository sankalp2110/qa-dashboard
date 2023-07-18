import { VerticalFeatureRow } from './VerticalFeatureRow';
import { Section } from './layout/Section';


const VerticalFeatures = () => (
  <Section
    title="Available Services"
    description=""
  >
    <VerticalFeatureRow
      title="Comprehensive Testing"
      description="Thorough testing of your software to ensure it meets quality standards."
     
    />
    <VerticalFeatureRow
      title="Test Automation"
      description="Automated testing solutions to improve efficiency and accuracy."
      reverse={true} 
    />
    <VerticalFeatureRow
      title="Performance Testing"
      description="Identify and resolve performance issues to optimize your software's speed and stability."
      
    />
    <VerticalFeatureRow
      title="Security Testing"
      description="Protect your software from vulnerabilities and ensure data security."
      reverse={true} 
    />
    <VerticalFeatureRow
      title="Mobile Testing"
      description="Test your mobile applications across various devices"
      
    />
  </Section>
);

export { VerticalFeatures };