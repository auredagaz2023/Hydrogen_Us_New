import { useLoaderData } from "@remix-run/react";
import { LoaderArgs, json } from "@shopify/remix-oxygen";
import BabyScreen from "~/components/Test/BabyScreen";
import ForMeScreen from "~/components/Test/ForMeScreen";

export async function loader({ request, context, params}: LoaderArgs) {
  const queryParams = new URL(request.url).searchParams;
  const testIndex = queryParams.get("test-index");

  return json({
    testIndex
  })
}

export default function TestMattress() {
  const { testIndex } = useLoaderData<typeof loader>();

  var selected: any[] = new Array(8);
  const onChange = (_selected: any[]) => {
    selected = _selected;
  }
  switch (testIndex) {
    case "0":
    case "3":
        return <ForMeScreen
        start_step = {1}
        testId={parseInt(testIndex)}
        selected={selected}
        onChange={(selected: any[]) => onChange(selected)}/>
    case "1":
        return <ForMeScreen
        start_step = {2}
        size="Double"
        testId={1}
        selected={selected}
        onChange={(selected: any[]) => onChange(selected)}/>
    case "2":
      return <BabyScreen />
    default:
      return null;
  }
}
