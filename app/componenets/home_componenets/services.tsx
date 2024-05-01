import React from "react";
import Card from "../../shared/componenets/Card";
import Image from "next/image";

const Services = (props: any) => {
  const cards = [
    {
      title: "Fast maintenance",
      imageSrc: "/mecanicien.png",
      description:
        "Fast support for your medical equipment. Submit your requests in one click, and our technicians will respond immediately.",
    },
    {
      title: "Proactive communication",
      imageSrc: "/communication.png",
      description:
        "With our communication service direct, you can stay in touch with your technician at any time, whether by chat, audio call, or videoconference.",
    },
    {
      title: "Dynamic Monitoring",
      imageSrc: "/essai.png",
      description:
        "Track the progress of your repairs has never been easier. With our real-time tracking system, you can have instant insight into every step of the maintenance process.",
    },
  ];

  return (
    <div id={props.id} className="servies_container">
      <h2 className=" font-bold font-serif text-xl"> Our Services</h2>
      <p className="text_top font-serif ">
        All the tools and features you need to simplify, organize, and optimize
        your Maintenance and Reliability team and operations.
      </p>
      <div className="all_cards_container">
        {cards.map((card, index) => (
          <Card key={index} className="card_container">
            <h2>{card.title}</h2>
            <Image
              src={card.imageSrc}
              alt="image"
              width={50}
              height={50}
              className="mb-6"
            />
            <p>
              <span className="ml-4"></span>
              {card.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
