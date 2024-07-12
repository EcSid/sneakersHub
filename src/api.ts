import { ISneaker } from "./components/types/types";
import { sneakerArr } from "./data";

export default function fetchSneakers(): Promise<ISneaker[]> {
        return new Promise(res => {
            res(sneakerArr)
        })
}