import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <Text variant="h1">Text</Text>
      <Button variant="default" size="rounded">
        Button
      </Button>
      <Input label="wr" />
    </>
  );
}
