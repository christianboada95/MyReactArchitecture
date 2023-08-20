import { Character } from "@domain/entities";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useApplication } from "@presentation/hooks"
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function DashboardCharacter() {
  let params = useParams();
  let navigate = useNavigate();
  const { findCharacterById } = useApplication();
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    findCharacterById(Number(params.id)).then(setCharacter)
  }, [findCharacterById, setCharacter])

  return (
    <section className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{character?.name}</p>
          <small className="text-default-500">{character?.status} - {character?.species}</small>
          <h4 className="font-bold text-large">{character?.gender}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={character?.image}
            width={270}
          />
        </CardBody>
      </Card>
      <Button onPress={() => navigate(-1)}>Go Back</Button>
    </section>
  )
}

//export default DashboardCharacter
