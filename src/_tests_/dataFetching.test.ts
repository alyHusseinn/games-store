import {expect, describe, test} from "vitest";
import { getGameDetails } from "../dataFetching";

describe("testing our Api", () => {
    test("test get game details function", async() => {
        getGameDetails(3498).then((game) => {
            expect(game.description).toBeTruthy();
            expect(game.trailer).toBeTruthy();
            console.log("fuck you vitest");
        })
    })
})

