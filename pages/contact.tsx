import Nav from "../components/nav";
import { Title } from "../components/title";

import { ContactForm } from "../components/contactForm";

const Contact = () => {
  return (
    <div className="relative">
      <div className="overlay-background-image bg-blue-100 opacity-25" />
      <Nav />

      <div className="content-container">
        <Title
          color="#013f5d"
          title="Contact"
          subtitle="Geïntereseerd in een training of heb je een vraag? Vul gerust het formulier in en ik zal zo snel mogelijk reageren"
        />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
