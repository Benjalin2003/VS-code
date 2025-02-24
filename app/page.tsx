
import { Container, Title } from "@/components/shared";
import { TopBar } from "@/components/shared/top-bar";
import Image from "next/image"

export default function Home() {
  return (
    <>
    <Container className="mt-10">
      <Title size="lg" text="Все пиццы" className="font-black"></Title>
    </Container>
    <TopBar/>
    </>
  );
}
