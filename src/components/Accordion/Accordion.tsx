import { Accordion } from "radix-ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const FaqFitAccordion = () => (
    <Accordion.Root
        className="AccordionRoot"
        type="single"
        defaultValue="item-1"
        collapsible
    >
        <Accordion.Item className="AccordionItem" value="item-1">
            <Accordion.Header>
                <Accordion.Trigger className="AccordionTrigger">
                    ¿Qué es el entrenamiento funcional?
                    <ChevronDownIcon />
                </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="AccordionContent">
                <div className="AccordionContentText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam perspiciatis iste repellendus accusantium placeat voluptatem a eius at perferendis tenetur ipsa, pariatur cupiditate, saepe velit aut facere assumenda quidem earum.
                </div>
            </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-2">
            <Accordion.Header>
                <Accordion.Trigger className="AccordionTrigger">
                    ¿Puedo ir en cualquier horario?
                    <ChevronDownIcon />
                </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="AccordionContent">
                <div className="AccordionContentText">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos alias assumenda, facilis nam adipisci vitae recusandae itaque eos sed blanditiis debitis quod modi laboriosam quas placeat fugiat dolorem sapiente repellat!
                </div>
            </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-3">
            <Accordion.Header>
                <Accordion.Trigger className="AccordionTrigger">
                    ¿Hay una edad límite?
                    <ChevronDownIcon />
                </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="AccordionContent">
                <div className="AccordionContentText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quis necessitatibus cumque. Minus, illum. Culpa maiores earum, similique vero architecto perferendis, iusto fugiat saepe temporibus cum, eveniet fuga nostrum pariatur.
                </div>
            </Accordion.Content>
        </Accordion.Item>

                <Accordion.Item className="AccordionItem" value="item-4">
            <Accordion.Header>
                <Accordion.Trigger className="AccordionTrigger">
                    ¿Necesito experiencia previa?
                    <ChevronDownIcon />
                </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="AccordionContent">
                <div className="AccordionContentText">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos alias assumenda, facilis nam adipisci vitae recusandae itaque eos sed blanditiis debitis quod modi laboriosam quas placeat fugiat dolorem sapiente repellat!
                </div>
            </Accordion.Content>
        </Accordion.Item>

    </Accordion.Root>
);

export default FaqFitAccordion;