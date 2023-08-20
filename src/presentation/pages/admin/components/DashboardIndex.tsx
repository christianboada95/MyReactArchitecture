import { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useApplication } from "@presentation/hooks"
import { Character } from "@domain/entities";

export function DashboardIndex() {
  const { getAllCharacters } = useApplication();
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    getAllCharacters().then(setCharacters)
  }, [getAllCharacters, setCharacters])

  return (
    <section className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {characters.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.name}
              className="w-full object-cover h-[140px]"
              src={item.image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.name}</b>
            <p className="text-default-500">{item.id}</p>
          </CardFooter>
        </Card>
      ))}
    </section>
  )
}